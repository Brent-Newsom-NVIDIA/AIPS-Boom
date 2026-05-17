# Nsight JupyterLab Extension

**Type:** JupyterLab extension / profiling workflow
**Tags:** NVIDIA, Nsight, JupyterLab, notebooks, profiling, Nsight Systems, Nsight Compute, CUDA, Python, magic commands, PyPI
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Python]], [[CUDA-Python]], [[CUPTI]], [[NVIDIA-CUDA]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/tools-overview/nsight-jupyterlab, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-within-jupyterlab, https://developer.nvidia.com/tools-overview/nsight-compute/get-started, https://pypi.org/project/jupyterlab-nvidia-nsight/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight JupyterLab Extension provides access to Nsight profiling workflows directly from Jupyter notebooks. It lets users profile notebook cells with [[Nsight-Systems]] or [[Nsight-Compute]], view profiler text output in the notebook, and open profiler UI views without leaving JupyterLab.

## Detail
The extension is for notebook-centric CUDA, Python, and accelerated-computing workflows where leaving JupyterLab to run command-line profiling is disruptive. NVIDIA's current developer page says toolbar menus and buttons can launch Nsight Systems or Nsight Compute profilers on selected cells, display output in the cell output area, and provide magic command profiling that can be used from any Jupyter client.

For [[Nsight-Systems]], the current user guide documents JupyterLab profiling of notebook cells where CUDA kernels plus CUDA and Python execution can be profiled and analyzed. Basic setup installs the package with `pip install jupyterlab-nvidia-nsight`, restarts JupyterLab, configures the Nsight Systems location if needed, enables profiling with Nsight Systems, and then uses the notebook toolbar to profile cell execution. Nsight Systems itself is not bundled with the extension and must be installed separately.

For [[Nsight-Compute]], NVIDIA's current get-started page lists the Nsight Tools JupyterLab Extension as the path that integrates Nsight Compute's CUDA kernel profiling functionality into JupyterLab.

Use this page for "profile Jupyter notebook cells with NVIDIA tools" questions. Use [[Nsight-Python]] for Python-first profiling automation APIs and [[CUDA-Python]] for CUDA programming from Python.

## Connections
- [[Nsight-Developer-Tools]] - suite-level hub where the JupyterLab extension is listed as a current Nsight tool.
- [[Nsight-Systems]] - profiles notebook cell execution, CUDA kernels, CUDA activity, and Python execution.
- [[Nsight-Compute]] - provides CUDA kernel profiling integrated into the JupyterLab workflow.
- [[Nsight-Python]] and [[CUDA-Python]] - adjacent Python-centric CUDA profiling and programming workflows.
- [[CUPTI]] - lower-level tracing/profiling API layer beneath NVIDIA profiling tools.

## Resources
- [Nsight JupyterLab Extension](https://developer.nvidia.com/tools-overview/nsight-jupyterlab)
- [Nsight Systems profiling within JupyterLab](https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-within-jupyterlab)
- [Nsight Compute get started](https://developer.nvidia.com/tools-overview/nsight-compute/get-started)
- [jupyterlab-nvidia-nsight on PyPI](https://pypi.org/project/jupyterlab-nvidia-nsight/)
