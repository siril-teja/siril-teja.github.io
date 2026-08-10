---
layout: page
title: 3D Printed Analogue Lumbar Spine
description: A fully 3D-printable L1-S1 analogue spine model with ligaments — validated against cadaveric and FE data. Published in Journal of Bionic Engineering (2024).
img: assets/img/publication_preview/2Manu2024.png
importance: 3
category: work
related_publications: true
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/2Manu2024.png" title="3D printed lumbar spine surrogate" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The fully 3D-printable L1-S1 analogue lumbar spine model. All components — vertebrae, intervertebral discs, and ligaments — are manufactured using consumer-grade FDM and resin 3D printers.
</div>

## Overview

Cadaveric spine specimens are the gold standard for biomechanical testing, but they are costly, ethically constrained, and introduce significant biological variability. Finite element models, while powerful, require extensive expertise and can be computationally expensive when high geometric and material fidelity is needed.

This project developed and validated a **fully 3D-printable analogue lumbar spine model** (L1 to S1) that can serve as a **cost-effective, reproducible, and open-source surrogate** for cadaveric tissue in biomechanical research.

**Published in the Journal of Bionic Engineering:**

> Dukkipati, S.T. & Driscoll, M. (2024). *Design Improvements and Validation of a Novel Fully 3D Printed Analogue Lumbar Spine Motion Segment.* **Journal of Bionic Engineering**, 21(3), 1388–1396. [DOI: 10.1007/s42235-024-00512-8](https://doi.org/10.1007/s42235-024-00512-8)

## Model Design

The model consists of:

- **L1 to S1 vertebrae** — 3D printed in rigid PLA or resin, geometrically derived from anatomical references
- **Intervertebral discs (IVDs)** — fabricated from a flexible TPU-based material to replicate disc compliance
- **Ligaments** — interspinous (ISL), intertransverse (ITL), and thoracolumbar fascia (TLF) — modeled as flexible strips or bands printed in elastic materials
- **Facet joints** — represented with direct contact between rigid surfaces

All components are designed for **standard consumer-grade FDM printers**, making the model accessible and reproducible globally.

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IMAC2024b.png" title="3D printed spine model testing" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IMAC2024a.png" title="Ligament effect study" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: Benchtop testing setup for pure moment loading (IMAC-XLII 2024). Right: Systematic ligament construction/deconstruction study showing incremental effects on spinal stiffness.
</div>

## Validation

The model was subjected to **displacement-controlled pure moment loading** in three bending planes:

| Loading Mode | ROM at 7.5 Nm (model) | Ex vivo reference | In silico reference |
|---|---|---|---|
| Flexion | 12.92 ± 0.11° | 16.58° | 12.96° |
| Lateral Bending | 13.67 ± 0.12° | 15.21 ± 1.89° | 15.49 ± 0.23° |
| Axial Rotation | 17.69 ± 2.12° | 14.12 ± 0.31° | 15.91 ± 0.28° |

Calibration scaling factors were applied in lateral bending (b = 1.6) and axial rotation (g = 3.0) to account for material property differences. Post-scaling, all modes showed good correlation with cadaveric and FE literature.

## Ligament Studies

A key contribution of this project was a systematic **ligament construction and deconstruction** study, revealing:

- **Interspinous + intertransverse ligaments** increased flexion and lateral bending stiffness by ~5%
- **Thoracolumbar fascia (TLF)** addition increased flexion stiffness by **29%** and axial rotation stiffness by **24%** — confirming the major biomechanical role of the TLF

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/EUROSPINE2024.png" title="EUROSPINE 2024 presentation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/CSS2024.png" title="CSS 2024 ligament study" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: EUROSPINE Annual Meeting 2024 (Vienna) — ligament tear study. Right: Canadian Spine Society 2024 (Whistler) — ligament damage models.
</div>

## L2-L5 Extension & Full-Field Testing

The model was later extended to an **L2-L5 motion segment** and used in inter-laboratory full-field biomechanical testing. A modular design allows fabrication of different spinal levels and configurations.

## Conference Presentations

{% cite 2Manu2024 1Manu2022 IMAC2024a IMAC2024b EUROSPINE2024 CSS2024 GSC2023c GSC2023b GSC2023a SLD2023 SSFA2023 FRS2022 ESMC2022 ORS2025c %}

## Publication

{% bibliography --cited %}
