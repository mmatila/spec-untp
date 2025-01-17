---
sidebar_position: 15
title: Traceability Events
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Versions

|traceability Version|Date|status|JSON-LD Context|
|--|--|--|--|
|0.3.0|20-04-2024|Raw (for review)|Coming soon - fixing a bug|


The current version of this specification is v0.3.0

## Overview

Traceability events are very lightweights collections of identifiers that specify the “what, when, where, why and how” of the products and facilities that constitute a value chain. The UNTP is based on the [GS1 EPCIS](https://www.gs1.org/standards/epcis) standard for this purpose because it is an existing and proven mechanism for supply chain traceability. Note that UNTP supports but does not require the use of GS1 identifiers. The basic idea behind the traceability event structure is that any supply chain of any complexity can always be accurately modeled using a combination of four basic event types. An **object** event describes an action on specific product(s) such as an inspection. A **transaction** event describes the exchange of product(s) between two actors such as sale of goods between seller and buyer. An **aggregation** event describes the consolidation or de-consolidation of products such as stacking bales of cotton on a pallet for transportation. An **association** event describes the assembly of sub-components to make a composite product. Finally, a **transformation** event describes a manufacturing process that consumes input product(s) to create new output product(s). The UNTP uses these events in a decentralised architecture as the means to traverse the linked-data "graph" that represents the entire value-chain.

## Conceptual Model

![Traceability events conceptual model](TraceabilityEvents.png)

## Requirements

The traceability event is designed to meet the following detailed requirements as well as the more general [UNTP Requirements(https://uncefact.github.io/spec-untp/docs/about/Requirements)]

|ID|Name|Requirement Statement|Solution Mapping|
|--|--|--|--|
|TEV-01|Sub-components|The traceability event MUST provide a mechanism to trace from a DPP representing a product assembly to the individual DPPs of each sub-assembly component part|[Association Event](#associationevent)|
|TEV-02|Consumed materials|The traceability event MUST provide a mechanism to trace a manufactured product DPP back to the DPPs representing batches of input materials that are consumed in manufacturing one or more output products.|Transformation Event](#transformationevent)|
|TEV-03|Aggregated bundles|When a DPP represents an aggregated bundle of similar items (eg a pallet of cotton bales) then the traceability event MUST provide a means to allocate the aggregate measures to each individual item (ie each bale)|[Aggregation Event](#aggregationevent)|
|TEV-04|Transportation|when a product (or consolidated consignment) is shipped from one physical location to another, the traceability event MUST provide a means to record the movement and associate sustainability measures such as transport emissions to the shipped bundle|[Transaction event](#transactionevent)|
|TEV-05|items or quantities|Traceability events MUST work equally well whether the input or output items are individually serialised items or measured quantities (mass or volume) of a product class.|[Items](#item) [Quantity](#quantityelement)|
|TEV-06|IoT Sensor data|Traceability events will often be generated by or associated with physical sensor readings. In such cases, the traceability event SHOULD support the association of sensor data with the event|[Sensor element](#sensorelement)|
|TEV-07|Time & Location|Traceability events MUST always record the timestamp and physical location of the event so that multiple events can be be connected in time and space|[Event](#event)|


## Logical Model

![Data Model](TraceabilityEvents.svg)

## Data Definitions

### Event

> This abstract event structure provides a common language to describe supply chain events such as shipments, inspections, manufacturing processes, etc. There are four types of event but this is an abstract class representing all common properties of an event.  

Property | Definition | Type
--- | --- | ---
eventID | The unique identifier of this event - SHOULD be a UUID | Text
eventTime | The ISO-8601 date time when the event occurred. | DateTime
action | Code describing how an event relates to the life-cycle of the entity being described. | Code (actionCode)
disposition | Disposition code describing the state of the item after the event.  | Code (dispositionCode)
bizStep | A business step code drawn from a controlled vocabulary.  | Code (bizStepCode)
bizLocation | A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an EPCIS event until it is reported to be at a different Business Location by a subsequent EPCIS event. The bizLocation must be a resolvable URI that links to facility information and geolocation data. | URI
sensorElementList | An array (one for each sensor) of sensor device data sets associated with the event.  | [SensorElement](#sensorelement)


### Object Event

> Object represents an event that happened to one or more physical or digital objects - such as an inspection or certification of a product or shipment. The physical objects may be identified either as specific items (eg a unique consignment number) or as a quantified amount of a product class (eg 100Kg of cotton yarn)

Note that object event includes all the properties of [Event](#event) as well as the additional properties described below.

Property | Definition | Type
--- | --- | ---
epcList | A list of uniquely identified items (eg specific items serial numbers or tagged shipments / packages) that are the focus of this object event.   | [Item](#item)
quantityList | A quantified list of product classes (eg GS1 GTINs) that are the focus of this object event | [QuantityElement](#quantityelement)


### Aggregation Event

> Aggregation represents an event that happened to one or more objects that are physically aggregated together (physically constrained to be in the same place at the same time, as when cases are aggregated to a pallet).  This event is also used to represent de-aggregation (eg unpacking) when businessStepCode is unpacking.

Note that aggregation event includes all the properties of [Event](#event) as well as the additional properties described below.

Property | Definition | Type
--- | --- | ---
parentEPC | The unique item identifier that is the result of this aggregation. Typically a packaging ID used in shipments that represents a box/ pallet / container of contained items. | [Item](#item)
childEPCs | The list of child items that have been aggregated into the parent (or dis-aggregated from the parent). Maybe a list of package references (eg boxes on a pallet) or may be individual items (eg products in a box). | [Item](#item)
childQuantityList | List of quantified product classes that have been aggregated into the parent.  Used when the child items do not have unique identifiers (eg 100 Kg of cotton bales) | [QuantityElement](#quantityelement)



### Transaction Event

> Transaction represents an event in which one or more objects become associated or disassociated with one or more identified business transactions - such as the purchase / shipment of goods between buyer and seller.

Note that transaction event includes all the properties of [Event](#event) as well as the additional properties described below.

Property | Definition | Type
--- | --- | ---
sourceParty | The source party for this supply chain transaction - typically the seller party | [Party](#party)
destinationParty | The destination party for this supply chain transaction - typically the buyer party. | [Party](#party)
epcList | The list of uniquely identified trade items included in this supply chain transaction. | [Item](#item)
quantityList | List of quantified product classes that are included in this transaction.  Used when the trade items do not have unique identifiers (eg 100 reels of yarn) | [QuantityElement](#quantityelement)
referenceDocument | The supply chain document reference for this transaction event - eg the invoice, order, or dispatch advice | [TradeDocument](#tradedocument)



### Transformation Event

> Transformation represents an event in which input objects are fully or partially consumed and output objects are produced, such that any of the input objects may have contributed to all of the output objects - for example consuming bales of cotton to produce yarn.

Note that transformation event includes all the properties of [Event](#event) as well as the additional properties described below.

Property | Definition | Type
--- | --- | ---
outputEPCList | The list of uniquely identified items that are the output of this transformation event - for example a list of individually identified bolts of cloth that are the output of a weaving process. | [Item](#item)
inputEPCList | The list of uniquely identified items that are the input of this transformation event - for example a list of individually identified bobbins of yarn that are the input of a weaving process. | [Item](#item)
inputQuantityList | The quantified list of product classes that are the input of this transformation event - used when each item does not have a unique identity.  for example the weight of raw cotton that is the input to a ginning process. | [QuantityElement](#quantityelement)
outputQuantityList | The quantified list of product classes that are the output of this transformation event - used when each item does not have a unique identity.  for example a count of the bales of cleaned cotton that are the output of a ginning process. | [QuantityElement](#quantityelement)
processType | An industry specific process type code.   | URI


### AssociationEvent

> The association event represents the assembly of child sub-components to create a parent assembled item. For example a desktop computer assembled from power supply, hard drive, and motherboard.  The association event is very similar in structure to the aggregation event but is used for physical assembly. An association event may represent a bill of materials used to assemble a  product whilst an aggregation event may represent a packing list or items for transport. 

Note that association event includes all the properties of [Event](#event) as well as the additional properties described below.

Property | Definition | Type
--- | --- | ---
parentEPC | The unique item identifier that is the parent of this association. Typically an assembled product ID such as a desktop computer that is built from the associated child components. | [Item](#item)
childEPCs | The list of child items that have been assembled to create the parent - for example the power supply or hard drive components of a desktop computer. | [Item](#item)
childQuantityList | List of quantified product classes that have been assembled into the parent.  Used when the child items do not have unique identifiers (eg brackets and screws used in the assembly of a desktop computer) | [QuantityElement](#quantityelement)


### QuantityElement

> The quantity element is used to define the quantities (eg 100), units of measure (eg Kg) and product class (eg GTIN or other class identifier) of products that are inputs or outputs or the subject of supply chain events.  

Property | Definition | Type
--- | --- | ---
epcClass | THe identifier of a product class (as opposed to a product instance) such as a GTIN code for a manufactured product. | URI
quantity | The numeric quantity of the product class (eg 100 kg of cotton) | Numeric
uom | The unit of measure for the quantity value (eg Kg or meters etc) using the UNECE Rec 20 unit of measure codelist. | Code (UOM)


### TradeDocument

> A trade transaction between two parties such as an invoice, purchase order, or shipping notification.

Property | Definition | Type
--- | --- | ---
type | The document type representing the trade transaction drawn from the business transaction type vocabulary. | Code (documentTypeCode)
identifier | The identifier of the trade transaction document - eg an invoice number or bill of lading number.  Must be unique for a given source party | Text
documentURL | The URL of the referenced trade document. For integrity reasons, it is recommended (but not required) that the documentURL is a hash-link (https://w3c-ccg.github.io/hashlink/) so that if the document the URL is changed then the hash verification will fail.


### Item

> A specific trade item /product code which could be either a product serial number or a consignment identifier 

Property | Definition | Type
--- | --- | ---
itemID | The globally unique identifier (eg GS1 GTIN or digital link) of the product item.   | URI
name | The name of the product class to which the product item belongs.   | Text


### Party

> A trade party 

Property | Definition | Type
--- | --- | ---
partyID | The globally unique identifier of the party. This must be expressed as a URI that is (preferably) resolvable to an entity register such as a national business register - eg https://abr.business.gov.au/ABN/View?abn=41161080146  | URI
name | The entity name of the identified party - usually the business name from the corresponding national registry -eg ACME LTD | Text


### SensorElement

> A SensorElement is used to carry data related to an event that is captured one sensor such as an IoT device. Include one sensor property and an array of sensor data values.

Property | Definition | Type
--- | --- | ---
sensorMetadata | Data that describes the physical sensor that recorded the sensor data set. | [Sensor](#sensor)
sensorReport | A list of sensor readings from the given sensor relevant to the traceability event context. | [SensorData](#sensordata)
sensorIntegrityProof | An optional reference to a verifiable credential signed by the sensor device or device manufacturer that contains the digitally signed raw data associated with this sensor report. | URI


### Sensor

> A physical sensor that records a sensor data set.

Property | Definition | Type
--- | --- | ---
device | The device Identifier for the sensor as a URI (typically an EPC) | [Item](#item)
dataProcessingMethod | The data processing method used by the sensor - should reference a documented standard criteria as a URI | URI

### SensorData

> A data point read by a sensor.

Property | Definition | Type
--- | --- | ---
time | the timestamp at which the sensor reading was made. | DateTime
type | the measurement type of the sensor reading, as a URI reference to a measurement method specification. | URI
value | the sensor reading | Numeric
uom | the unit of measure for the sensor reading | Code (UOM)


## Code Tables

### actionCode

The Action type says how an event relates to the lifecycle of the entity being described. For example, AggregationEvent is used to capture events related to aggregations of objects, such as cases aggregated to a pallet. Throughout its life, the pallet load participates in many business process steps, each of which may generate an EPCIS event. The action field of each event says how the aggregation itself has changed during the event: have objects been added to the aggregation, have objects been removed from the aggregation, or has the aggregation simply been observed without change to its membership? The action is independent of the bizStep (of type BusinessStepID) which identifies the specific business process step in which the action took place.

|Name | Description|
|--- | ---|
|observe | The entity in question has not been changed.|
|add | The entity in question has been created or added to.|
|delete | The entity in question has been removed from or destroyed altogether.|


### dispositionCode

Disposition code is a vocabulary whose elements denote a business state of an object. An example is a code that denotes “recalled". The disposition field of an event specifies the business condition of the event’s objects, subsequent to the event. The disposition is assumed to hold true until another event indicates a change of disposition. Intervening events that do not specify a disposition field have no effect on the presumed disposition of the object. 

```
Code values for this table can be found here:
https://ref.gs1.org/cbv/Disp
```

### bizStepCode

BusinessStep is a vocabulary whose elements denote steps in business processes. An example is an identifier that denotes “shipping.” The business step field of an event specifies the business context of an event: what business process step was taking place that caused the event to be captured?

```
Code values for this table can be found here:
https://ref.gs1.org/cbv/BizStep
```


### UOM

UNECE Recommendation 20 Unit of Measure code list.

```
Code values for this table can be found here:
https://vocabulary.uncefact.org/UnitMeasureCode
```


### documentTypeCode

Document type codes for trade and logistics documents supporting the event such as purchase order, invoice, shipping notification, bill of lading, etc.

```
Code values for this table can be found here:
https://ref.gs1.org/cbv/BTT
```


## Samples

### Object Event

```
{
  "epcList": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "quantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "eventTime": "2019-08-24T14:15:22Z",
  "action": "observe",
  "disposition": "string",
  "bizStep": "string",
  "bizLocation": "http://example.com",
  "sensorElementList": [
    {
      "sensorMetadata": {
        "device": {
          "itemID": "http://example.com",
          "name": "string"
        },
        "dataProcessingMethod": "http://example.com"
      },
      "sensorReport": [
        {
          "time": "2019-08-24T14:15:22Z",
          "type": "http://example.com",
          "value": 0,
          "uom": "string"
        }
      ],
      "sensorIntegrityProof": "http://example.com"
    }
  ]
}

```

### Transaction Event

Note that the sensorElementList property exists in the transaction event but is not expanded in the sample below for brevity purposes.

```
{
  "sourceParty": {
    "partyID": "http://example.com",
    "name": "string"
  },
  "destinationParty": {
    "partyID": "http://example.com",
    "name": "string"
  },
  "epcList": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "quantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "referenceDocument": {
    "type": "string",
    "identifier": "string",
    "documentURL": "http://example.com"
  },
  "eventTime": "2019-08-24T14:15:22Z",
  "action": "observe",
  "disposition": "string",
  "bizStep": "string",
  "bizLocation": "http://example.com",
  "sensorElementList": [..]
}
```

## Aggregation Event

Note that the sensorElementList property exists in the transaction event but is not expanded in the sample below for brevity purposes.

```
{
  "parentEPC": {
    "itemID": "http://example.com",
    "name": "string"
  },
  "childEPCs": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "childQuantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "eventTime": "2019-08-24T14:15:22Z",
  "action": "observe",
  "disposition": "string",
  "bizStep": "string",
  "bizLocation": "http://example.com",
  "sensorElementList": [..]
}
```

### Transformation Event

Note that the sensorElementList property exists in the transaction event but is not expanded in the sample below for brevity purposes.

```
{
  "outputEPCList": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "inputEPCList": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "inputQuantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "outputQuantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "processType": "http://example.com",
  "eventTime": "2019-08-24T14:15:22Z",
  "action": "observe",
  "disposition": "string",
  "bizStep": "string",
  "bizLocation": "http://example.com",
  "sensorElementList": [..]
}
```

### Association Event

Note that the sensorElementList property exists in the transaction event but is not expanded in the sample below for brevity purposes.

```
{
  "parentEPC": {
    "itemID": "http://example.com",
    "name": "string"
  },
  "childEPCs": [
    {
      "itemID": "http://example.com",
      "name": "string"
    }
  ],
  "childQuantityList": [
    {
      "epcClass": "http://example.com",
      "quantity": 0,
      "uom": "string"
    }
  ],
  "eventTime": "2019-08-24T14:15:22Z",
  "action": "observe",
  "disposition": "string",
  "bizStep": "string",
  "bizLocation": "http://example.com",
  "sensorElementList": [..]
}
```

## Working Examples

TBC
