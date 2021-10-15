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

* Resources
  * Property: `"resources" : []`
  * Defines all the resources of the template

**Initial structure:**

```JSON
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0"
}
```

## Add storage account

**What is a storage account:**

"
* A storage account is a container that bands a set of Azure Storage services togethe
* Only data services from Azure Storage can be comprised in a storage account. 
* Integrating data services into a storage account allows the user to manage them as a group. 
* The settings specified while creating the account, or setting that is changed after creation, is applicable everywhere. 
* Once the storage account gets deleted, all the data stored inside gets removed.
"
(SERVERLESS360, https://www.serverless360.com/azure-storage-account, Last-Access: 13.10.2021)

### Required properties

**`type`**:

Combination of:
* Namespace of the resource provider
* Resource type
  * In our case the type is `storageAccounts`

```JSON
"type": "Microsoft.Storage/storageAccounts",
```

**`apiVersion`**:

* Version of the created Api

**`name`**:

* Name of the resource
* The resource name is defined in the parameters of the template

**`location`**:

* Region where the resource is deployed
* Uses region of resource group by default: 
* Otherwise the location can be defined in the parameters

```JSON
"location": "[resourceGroup().location]"
```

**`sku`**:

Stock Keeping Unit (SKU) describes the product we choose for our resource.
For storage accounts we can choose among for options for data protection

* We choose the cheapest option 
  * Locally redundant storage (LRS)
    * Replicate data 3 times in a single data center (in primary region)
    * Protects against:
      * Servers rack
      * Drive failure

```JSON
"sku": {
            "name" : "Standard_LRS"
	}
```

**`kind`**:

* Type of storage account (see "https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview")
* We use the Standard general-purpose v2

"Standard storage account type for blobs, file shares, queues, and tables. Recommended for most scenarios using Azure Storage. 
Note that if you want support for NFS file shares in Azure Files, use the premium file shares account type." (Microsoft, "https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview", Last-Access 13.10.2021)


## Web-App

Before we define our web app we have to create an app service plan for it:

**App service plan:**

* An app always runs in an App Service Plan (E.g. Web Apps, API Apps, or Mobile Apps)
* Defines the set of compute resources for a web app

I will not mention all properties, only the important ones:

`kind`:

* Hosting platform
* We use linux 

`sku`:

* For the 




## Output

{
  "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Resources/deployments/azuredeploy",
  "location": null,
  "name": "azuredeploy",
  "properties": {
    "correlationId": "bae25872-175d-4288-bf03-8d5bf95c4d96",
    "debugSetting": null,
    "dependencies": [
      {
        "dependsOn": [
          {
            "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/serverfarms/AppServicePlan-lab1webapptesttompirch",
            "resourceGroup": "Web-Applications",
            "resourceName": "AppServicePlan-lab1webapptesttompirch",
            "resourceType": "Microsoft.Web/serverfarms"
          }
        ],
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/sites/lab1webapptesttompirch",
        "resourceGroup": "Web-Applications",
        "resourceName": "lab1webapptesttompirch",
        "resourceType": "Microsoft.Web/sites"
      },
      {
        "dependsOn": [
          {
            "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/sites/lab1webapptesttompirch",
            "resourceGroup": "Web-Applications",
            "resourceName": "lab1webapptesttompirch",
            "resourceType": "Microsoft.Web/sites"
          }
        ],
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/sites/lab1webapptesttompirch/sourcecontrols/web",
        "resourceGroup": "Web-Applications",
        "resourceName": "lab1webapptesttompirch/web",
        "resourceType": "Microsoft.Web/sites/sourcecontrols"
      }
    ],
    "duration": "PT1M27.2028001S",
    "error": null,
    "mode": "Incremental",
    "onErrorDeployment": null,
    "outputResources": [
      {
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Storage/storageAccounts/lab1storageacctompirich",
        "resourceGroup": "Web-Applications"
      },
      {
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/serverfarms/AppServicePlan-lab1webapptesttompirch",
        "resourceGroup": "Web-Applications"
      },
      {
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/sites/lab1webapptesttompirch",
        "resourceGroup": "Web-Applications"
      },
      {
        "id": "/subscriptions/3cad5f56-9be4-422c-98bd-71742ad82932/resourceGroups/Web-Applications/providers/Microsoft.Web/sites/lab1webapptesttompirch/sourcecontrols/web",
        "resourceGroup": "Web-Applications"
      }
    ],
    "outputs": null,
    "parameters": {
      "gitRepoUrl": {
        "type": "String",
        "value": "https://github.com/Azure-Samples/nodejs-docs-hello-world"
      },
      "location": {
        "type": "String",
        "value": "westeurope"
      },
      "storageAccountName": {
        "type": "String",
        "value": "lab1storageacctompirich"
      },
      "webAppName": {
        "type": "String",
        "value": "lab1webapptesttompirch"
      }
    },
    "parametersLink": null,
    "providers": [
      {
        "id": null,
        "namespace": "Microsoft.Storage",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "westeurope"
            ],
            "properties": null,
            "resourceType": "storageAccounts"
          }
        ]
      },
      {
        "id": null,
        "namespace": "Microsoft.Web",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "westeurope"
            ],
            "properties": null,
            "resourceType": "serverfarms"
          },
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "westeurope"
            ],
            "properties": null,
            "resourceType": "sites"
          },
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "westeurope"
            ],
            "properties": null,
            "resourceType": "sites/sourcecontrols"
          }
        ]
      }
    ],
    "provisioningState": "Succeeded",
    "templateHash": "4714874713233581368",
    "templateLink": null,
    "timestamp": "2021-10-13T04:06:29.895250+00:00",
    "validatedResources": null
  },
  "resourceGroup": "Web-Applications",
  "tags": null,
  "type": "Microsoft.Resources/deployments"
}

## Parameters

dasd
