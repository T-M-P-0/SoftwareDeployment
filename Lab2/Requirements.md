Aufgabenstellung:

Aufbau einer DevOps pipeline basierend auf Azuer DevOps mittels einen Node.JS Beispieles. 

Für das Beispiel ist eine Node.Js Applikation mittels Express aufzubauen. Diese Soll mittels einer Azuer DevOpps pipeline in einer Azure Web App nach jedem commit deplyoed werden.  Die Node.js applikation ist mit Testfällen auszustatten. Zusätzlich zu der build Pipeline soll auch ein Release Pipeline erstellt werden, welche ein automatische Übernahme eines Releases in Produktion geährleistet. Diese ist mit einem Manuellen check auszustatten und soll nicht nach jedem build veröffentlicht werden.  Abschließend sollte die Applikation Azure Application Insights einbinden. 
Abgabe:

Links zu einem Git Repo mit folgendem Inhalt im Ordner Lab2:

    Die NodeJS applikation
    eine README.md mit folgenden Informationen:
    Links zu den Azure Web Apps (dev & production)
    Screenshot der Azure DevOps build/Test/Deploy Pipeline incl.  erfolgreicher und nicht erfolgreicher Deployments
    Screenshot der Azure DevOps Release Pipeline
    Dokumentation wie die Releases freigegeben werden
