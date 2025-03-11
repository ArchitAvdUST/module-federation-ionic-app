# Module Federation with Host and Remote Applications

## 1. Set Up Host Application

1. Install necessary dependencies for each remote application:

   ```bash
   cd host-booking-app
   npm install
   ```

2. To run the application
   ```
   ionic serve --port=4200
   ```

Note: This should be run on port `4200`.

Currently remote are hosted in the cloud

`flight-booking-remote` is hosted in https://flight-booking-cyan.vercel.app/remoteEntry.js

`hotel-booking-remote` is hosted in https://hotel-booking-phi-wheat.vercel.app/remoteEntry.js

## 2. To Set Up Local Remote Applications

Note: When using local remote applications, don't forget to update the `mf.manifest.json` file in `host-booking-app`

1. Install necessary dependencies for each remote application:

   ```bash
   cd flight-booking-remote
   npm install

   cd hotel-booking
   npm install
   ```

Note: Module federation is set up for port `4201` for `flight-booking-remote` and `4202` for `hotel-booking-remote`

2. To run the application

`flight-booking-remote`

```
ionic serve --port=4201
```

`hotel-booking-remote`

```
ionic serve --port=4202
```
