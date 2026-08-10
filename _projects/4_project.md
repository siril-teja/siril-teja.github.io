---
layout: page
title: Robotic Benchtop Spine Model
description: A 6-DOF robotic platform for repeatable, programmable spine biomechanical testing — core doctoral project at McGill MBR Lab.
img: assets/img/publication_preview/SURE2019.png
importance: 4
category: work
related_publications: true
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/SURE2019.png" title="Robotic benchtop spine model" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The robotic benchtop spine model at the Musculoskeletal Biomechanics Research (MBR) Lab, McGill University. The system applies programmable loading to physical spine specimens and analogue models.
</div>

## Overview

The **Robotic Benchtop Spine Model** is the central experimental infrastructure of my doctoral research at the [Musculoskeletal Biomechanics Research Lab (MBR)](https://www.mcgill.ca/mbr/people-1), McGill University, supervised by [Prof. Mark Driscoll](https://www.mcgill.ca/mecheng/people/staff/mark-driscoll).

The platform is a **6-degree-of-freedom robotic testing system** designed to apply controlled, programmable mechanical loading to physical spine specimens — both cadaveric tissue and engineered analogue models. Unlike conventional load frames, the robotic architecture allows:

- **Pure moment application** in flexion-extension, lateral bending, and axial rotation simultaneously
- **Programmable loading protocols** reproducible across specimens and laboratories
- **Integration with sensors** for force, torque, and motion capture feedback
- **Testing of analogue models** as well as biological tissue

## My Contributions

I joined this project as a **SURE Fellowship** intern in **summer 2019**, where I:

- Implemented the **control system** for the robotic spine testing platform
- Validated the kinematic performance of the robot against expected physiological loading ranges
- Developed initial benchmarking protocols for 3D-printed analogue models on the platform

During my doctoral work (2020–2025), this robotic system became the primary experimental workhorse for validating all spine surrogates developed in the lab, including the [3D printed analogue spine models](/projects/3_project) and the [inter-laboratory standardization studies](/projects/5_project).

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/1Manu2022.png" title="First spine model validation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/ESMC2022.png" title="ESMC 2022 presentation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: First 3D-printed analogue spine model validated on the robotic platform (SSRN preprint, 2022). Right: Presentation at the 11th European Solid Mechanics Conference (ESMC 2022, Galway, Ireland) — recipient of the McGill GREAT travel award.
</div>

## Testing Protocols

The robotic spine model follows standardized **pure moment loading protocols** adapted from cadaveric testing literature (Wilke et al., 1998; Panjabi, 1988). Key parameters:

- **Loading range:** ±7.5 Nm pure moment in all three bending planes
- **Loading mode:** Displacement-controlled (rotation-driven) or force-controlled
- **Measured outputs:** Applied moment, angular displacement, range of motion (ROM), rotational stiffness
- **Repeatability:** Mechanical precision of the robot ensures sub-degree repeatability across trials

## Why Robotic Testing?

| Feature | Cadaveric Testing | Finite Element Models | Robotic Platform |
|---|---|---|---|
| Cost | High | Medium | Low (once built) |
| Repeatability | Low (biological variability) | High | High |
| Specimen availability | Limited | N/A | Unlimited (analogue models) |
| Protocol flexibility | Moderate | High | High |
| Regulatory acceptance | Gold standard | Supplementary | Emerging |

The robotic approach, combined with validated analogue models, enables **standardized, repeatable, and ethically unconstrained** spine biomechanical research.

## Related Publication

{% cite SURE2019 1Manu2022 ESMC2022 %}

## Publications

{% bibliography --cited %}
