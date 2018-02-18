# Edimax Sunset Switcher

Automatically switch on your Edimax socket within 30 minutes of (but not after) sunset, in a given location.


### Prerequisites
node.js / npm

Environment variables required:

	EDIMAX_HOST:		hostname or IP where your Edimax smartplug is located
	
	EDIMAX_USERNAME:	Edimax smartplug username
	
	EDIMAX_PASSWORD:	Edimax smartplug password
	
	EDIMAX_LAT:		Latitude of your Edimax smartplug (used to find sunset time today)
	
	EDIMAX_LNG:		Longitude of your Edimax smartplug (used to find sunset time today)


### Installing dependencies
`npm install`


### How to use

execute `run.sh`, probably from a cron job or otherwise on a schedule.
