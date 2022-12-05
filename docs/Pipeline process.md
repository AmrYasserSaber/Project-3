# The steps of the CI/CD pipeline
 
 1-After pushint the code to github in it trigers the circleci.
 2-circleci start by building up the code.
 3-checking it.
 4-then deploying it the eb.
 5-eb allocates only 30% of it's power to deploy the new version while 70% still run the old application.
 6-After deploying the EB channel all the connection to the new apllication while terminating the old one .  