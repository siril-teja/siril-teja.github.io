---
layout: page
title: High-Fidelity MATLAB Spine Model with IAP
description: A fast-solving (1.4 s) 15-DOF rigid body lumbar spine model inclusive of intra-abdominal pressure — published in IEEE Transactions on Biomedical Engineering (2025).
img: assets/img/publication_preview/3Manu2024.png
importance: 2
category: work
related_publications: true
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/3Manu2024.png" title="MATLAB rigid body spine model with IAP" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  High-fidelity MATLAB rigid-body lumbar spine model inclusive of intra-abdominal pressure (IAP). The model includes 15 DOF across the pelvis, L1–L5, and a lumped thoracic rib cage assembly.
</div>

## Overview

Traditional spinal biomechanical models either neglect the load-sharing contribution of **intra-abdominal pressure (IAP)** or are too computationally intensive for iterative muscle recruitment simulations. This project developed and validated a **high-fidelity, fast-solving rigid-body spine model** implemented entirely in **MATLAB**, specifically designed to overcome these limitations.

The model was published in **IEEE Transactions on Biomedical Engineering** (Vol. 72, Issue 10, pp. 3108–3119, 2025):

> Dukkipati, S.T. & Driscoll, M. (2025). *Evaluation of a Fast-Solving Rigid Body Spine Model Inclusive of Intra-Abdominal Pressure.* **IEEE Transactions on Biomedical Engineering**, 72(10), 3108–3119. [DOI: 10.1109/TBME.2025.3561692](https://doi.org/10.1109/TBME.2025.3561692)

## Model Architecture

The model represents the **full lumbar spine from L1 to S1**, including:

- **Skeletal geometry** adapted from MRI scans of a healthy adult male
- **Intervertebral discs** modeled as 3-DOF gimbal joints with custom nonlinear moment-rotation feedback
- **Spinal ligaments** (supraspinous, interspinous, intertransverse) as nonlinear tension-only springs
- **Pelvis, L1–L5 lumbar vertebrae, and a lumped thoracic/rib cage segment**
- **279 independent force-generating elements** constraining 15 degrees of freedom total

**Two IAP modeling approaches** were implemented and compared:
1. IAP as normal pressure force vectors applied to the diaphragm and lumbar spine
2. IAP idealized via spring-damper elements representing abdominal wall compliance

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/SEM2025.png" title="SEM 2025 model validation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/ORS2025b.png" title="ORS 2025 poster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: Model presented at SEM/IMAC-XLIII 2025 (Orlando). Right: ORS 2025 poster (Phoenix) showing validation against intradiscal pressure literature.
</div>

## Key Results

- **Compilation time:** ~6 seconds
- **Simulation run time:** ~1.4 seconds — suitable for real-time or iterative muscle recruitment optimization
- **Lumbar segmental stiffness** profiles validated to within **one standard deviation** of in vivo literature data
- IAP modeling showed a **linear increase in extensor torque about L3** with increasing IAP during flexion, consistent with the known load-sharing role of IAP
- The MATLAB-native implementation offers direct access to all model parameters and is designed to integrate with optimization and ML pipelines

## Significance

This model fills a gap in the literature by combining:

1. **High fidelity** — detailed anatomy, nonlinear material behavior, IAP inclusion
2. **Computational speed** — orders of magnitude faster than finite element models
3. **Accessibility** — implemented in MATLAB, widely used in the biomechanics community

Applications include **muscle recruitment optimization**, **robotic spine control**, **surgical planning**, and **training of machine learning models** on physiologically realistic spine loading data.

## Related Conferences

- GSC 2025 (Rio de Janeiro) — IAP-inclusive torso model
- SEM/IMAC-XLIII 2025 (Orlando) — Model validation {% cite SEM2025 %}
- ORS 2025 (Phoenix) — IAP spine model poster {% cite ORS2025b %}
- ORS 2024 (Long Beach) — Preliminary model results

## Publication

{% bibliography --cited %}
