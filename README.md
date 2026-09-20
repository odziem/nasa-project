# SpaceX launch data snapshot

`spacex-launches-query.json` is a snapshot of the SpaceX launch data used by the NASA Mission Control project in the [Complete Node.js Developer](https://academy.zerotomastery.io/a/aff_jqtq5631/external?affcode=441520_1jw4f2ay) course.

The original SpaceX API (`api.spacexdata.com`) was archived in June 2026. This file reproduces the response of `POST /v4/launches/query` with pagination turned off, and with the rocket `name` and payload `customers` populated. It contains 205 launches.

```
https://odziem.github.io/nasa-project/spacex-launches-query.json
```

## Source

Built from Internet Archive captures of the original APIs:

- https://api.spacexdata.com/v4/launches
- https://api.spacexdata.com/v4/payloads
- https://api.spacexdata.com/v4/rockets

## License

The data comes from [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API), licensed under Apache-2.0.
