# Hello App Cluster

This chart sets up a Hello App cluster. When applicable, the chart will default to 2 pods to
provide high-availability.

## Important Notices

- This is for demo only using ClusterIP service by default.
- If you plan to use LoadBalancer, remember configure the DNS for `example.hello-app.com` to point the newly created LoadBalancer at the end.

## Getting Started

### Single-node example

To install Hello App in a separate namespace run:

```bash
helm install hello-app \
    --create-namespace \
    --namespace=app \
    ./hello-app/
```

The command should output command lines to access newly created hello app cluster.

### Check helm installation revision

```bash
helm ls --namespace app
```

## Unit test

```bash
helm test --namespace app  hello-app
```

## Uninstalling

```bash
helm uninstall --namespace app hello-app
```

## Future Work

1. Documentation
2. Guideline for contributing to the chart


