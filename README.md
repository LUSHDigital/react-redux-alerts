# react-redux-alerts

Description of component and any special notes

## Usage

Install

```
yarn add @salocreative/react-redux-alerts
```

Include the Alerts component at the top of the component it's required in.

```
import Alerts from '@salocreative/react-redux-alerts';
```

Implement as follows

```
<Alerts alerts={ this.props.systemAlerts } />
```

In order to make sure the alerts are in your state you need to include the system alerts reducer into your combine reducer function.

in your reducer index include:

```
import { systemAlerts } from '@salocreative/react-redux-alerts';
```
and add to your combine reducer function. Next make sure that `systemAlerts` is mapped to props and connected to your component

## LICENSE

MIT
