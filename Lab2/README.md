# SoftwareDeploymentLab2

## Links zu den Azure Web Apps (dev & production)
 
Development: https://lab2tompirichproduction.azurewebsites.net

Production: https://lab2tompirichproduction.azurewebsites.net

## Production: Screenshot der Azure DevOps build/Test/Deploy Pipeline incl.  erfolgreicher und nicht erfolgreicher Deployments




### Failed deploy (test failed)

![image info](./Images/FailedDeploy.JPG "Failed Deploy")

#### Failed test

![image info](./Images/FailedDeployDueToFailedTest.JPG "Failed test.")

#### Details of the job with failed test

![image info](./Images/PipelineJobInfoFailedTest.JPG "Details of the job with failed test.")

### Successful Deployment

![iamge info](./Images/SuccessfullDeployAfterFixingTestPipeline.JPG)

### Job details

![iamge info](./Images/SuccessfullDeploydJobInfoAfterFixedTest.JPG)

## All pipeline runs

![iamge info](./Images/PipelineRuns.JPG)

## Screenshot der Azure DevOps Release Pipeline

![iamge info](./Images/Prod&DEvRelease.JPG)

### Tasks of the release pipelines

![iamge info](./Images/ReleasePipeline.JPG)

### Release (Development)

![iamge info](./Images/DevRelease.JPG)

### Release (Production)

![iamge info](./Images/ProdInfo.JPG)

## Dokumentation wie die Releases freigegeben werden

### Production

Bei dem Production Server werden die Releases manuell freigegeben.
Hierzu wurde folgendes an der "Prod Releases" eigestellt:

* Bei den Stages der Pipeline auf die Pre-deployment conditions gehen
* Dann auf `manuell only` wechseln

### Development

Hier wird nach einen erfolgreichen deploy automatisch ein Release erstellt.
