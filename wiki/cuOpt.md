# cuOpt

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Optimization, Operations Research, Routing, Logistics, AI
**Related:** [[NVIDIA-cuOpt-Managed-Service]], [[NVIDIA-Retail-ISV-Ecosystem]], [[Lyric]], [[NVIDIA-API-Documentation]], [[cuBLAS]], [[cuGraph]], [[AmgX]], [[Thrust]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-05-17

## Summary
NVIDIA cuOpt is a GPU-accelerated operations research optimization library providing real-time, AI-guided solutions for complex routing and logistics problems, including vehicle routing problems (VRP), fleet management, and supply chain optimization. It leverages GPU parallelism to explore solution spaces orders of magnitude faster than CPU solvers, enabling real-time re-routing and dynamic optimization for enterprises and simulation environments.

## Detail

### Purpose
Operations research problems like the Vehicle Routing Problem (VRP) — determining optimal routes for fleets of vehicles delivering to hundreds or thousands of locations — are NP-hard and traditionally take minutes to hours to solve with CPU solvers. cuOpt accelerates these solvers on GPU, enabling near-real-time optimization that can respond to dynamic changes (traffic, new orders, cancellations) in seconds.

### Key Features
- GPU-accelerated vehicle routing problem (VRP) solvers
- Capacitated VRP (CVRP), VRP with time windows (VRPTW), and variants
- Multi-constraint optimization: capacity, time windows, driver shifts, vehicle types
- Real-time re-optimization for dynamic fleet management
- AI-guided heuristics for exploring large solution spaces
- REST API for cloud deployment and microservice integration
- [[NVIDIA-cuOpt-Managed-Service]] for hosted/API usage, credentials, thin client, CLI, and routing-data workflows
- Available via NVIDIA NGC containers and NVIDIA AI Enterprise
- Python SDK for programmatic access
- Integration with NVIDIA Omniverse for simulation-based optimization

### Use Cases
- Last-mile delivery route optimization
- Fleet management and dispatch optimization
- Supply chain and warehouse picking optimization
- Retail supply-chain planning and route optimization with ISV implementation paths such as [[Lyric]]
- Ride-sharing and taxi dispatch
- Field service scheduling
- Autonomous robot fleet coordination
- Simulation-based logistics digital twin optimization

### Hardware Requirements
- NVIDIA GPU with CUDA support (A100, H100 for production)
- Available via cloud API (no local GPU required for API users)
- Docker/NGC container for self-hosted deployment

### Language Bindings
- Python (primary SDK)
- REST API (language agnostic)

## Connections
- [[cuGraph]] — cuOpt uses graph-based algorithms for route network representation
- [[NVIDIA-cuOpt-Managed-Service]] — hosted/service-oriented documentation for cuOpt optimization workloads
- [[NVIDIA-API-Documentation]] — API reference surface for NVIDIA hosted services
- [[AmgX]] — both cuOpt and AmgX are optimization-focused GPU libraries for different problem types
- [[Thrust]] — cuOpt uses Thrust for parallel data structure manipulation
- [[cuBLAS]] — cuOpt uses linear algebra routines for constraint satisfaction and cost matrix operations

## Resources
- [Official Page](https://developer.nvidia.com/cuopt-logistics-optimization)
- [cuOpt Documentation](https://docs.nvidia.com/cuopt/)
- [cuOpt on NVIDIA NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/cuopt/containers/cuopt)
