# ARM Template

## Template with basics

* Schema
 * Property : `"$schema": "URIOfSchema"`
 * "Specifies the location of the JSON schema file"
 * Contains the valid properties such as `resources` for an ARM template 

* Content version
  * Property : `"contentVersion": "CurrentVersion"`
  * Version of the template
    * In case newer versions of the template are added we can reference specific templates

**Initial structure:**

```JSON
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0"
}
```

## Add storage account

### Basic

* Property: `"resources" : []`
  * Contains all the resources


### Required properties

**`type`**:

Combination of:
* Namespace of the resource provider
* Resource type
  * In our case the type is storage account (`storageAcccounts`)

**We define:**
```JSON
"type": "Microsoft.Storage/storageAccounts",
```

**`apiVersion`**:

* Version of the created REST Api

**`name`**:

* Name of the resource
* The resource name is defined in the parameters
* Should be unique therefore 
**`location`**:

* Region where the resource is deployed
* Use region of resource group : 

```JSON
"location": "[resourceGroup().location]"
```

**`sku`**:


**`kind`**:


## Parameters


