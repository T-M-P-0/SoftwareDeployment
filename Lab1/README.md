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

* A storage account is a container that bands a set of Azure Storage services togethe
* Only data services from Azure Storage can be comprised in a storage account. 
* Integrating data services into a storage account allows the user to manage them as a group. 
* The settings specified while creating the account, or setting that is changed after creation, is applicable everywhere. 
* Once the storage account gets deleted, all the data stored inside gets removed.

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

### App service plan:

* An app always runs in an App Service Plan (E.g. Web Apps, API Apps, or Mobile Apps)
* Defines the set of compute resources for a web app

I will not mention all properties, only the important ones:

`type`:

* An appservice type is defined in `"Microsoft.Web/serverfarms"`

`kind`:

* Hosting platform
* We use linux 

`sku`:

* This defines the product we want to use for our app service
  * We want a free tier account
  * Therefore we set the property `tier` to `Free` and other properties like `family` to `F`
  * Find tier description here (https://docs.microsoft.com/en-us/azure/search/search-sku-tier)


### Web app resource

For the web app we use our app service resource which we defined previously:

* Therefore we make use of the property `dependsOn`:
  * Define inside "[resourceId('Microsoft.Web/serverfarms', variables('appServicePlanName'))]"
  * We reference a resource with type of an app service : `Microsoft.Web/serverfarms`
  * And the name of the resouce

* The `type` of an web app is defined as `Microsoft.Web/sites`

Next we would like to define the language of the server

* We can define certain stuff for our server in the property `properties`
* Our server will run on node
  * I defined theses settings as a variable called `nodeConfig`
  * I choose the default settings for a node app
* I defined the settings for the node server in
* We also define in the `properties` the `serverFarmId`

### Use a project

Now we would like to deploy a nodejs project

* In my arm template we use a project from a git repository
* For that we define again a resource of type `sourcecontrols`
* This resource depends on our web app:

```JSON
  "dependsOn": ["[resourceId('Microsoft.Web/sites', parameters('webAppName'))]"]
```

* The URL for the git repo is passed in the parameters `gitRepoUrl` it is called
* The master branch is cloned (defined in `branch`)

## Parameter file

In the parameter we define all the parameters which we need our application. We have three parameters which we need for our application:

* Name of the storage account
* Name of the web app
* URL to the git repository which includes the nodejs project for our web app

