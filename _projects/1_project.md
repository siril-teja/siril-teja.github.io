---
layout: page
title: SPINEsim Clinical Validation
description: Postdoctoral research on clinical V&V of a patient-specific spinal digital twin at MDsim S.A., Luxembourg — funded by FNR.
img: assets/img/publication_preview/SEM2025.png
importance: 1
category: work
related_publications: false
---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/SEM2025.png" title="SPINEsim digital twin platform" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  SPINEsim — a patient-specific digital twin platform for spine biomechanics and surgical planning, developed by MDsim S.A.
</div>

## Overview

My current research as a **Postdoctoral Researcher at [MDsim S.A.](https://mdsim.health)** (Esch-sur-Alzette, Luxembourg) focuses on the **biomechanical model verification and clinical validation** of the [SPINEsim](https://mdsim.health) platform — a Software as a Medical Device (SaMD) that creates patient-specific digital twins of the spine for surgical planning, simulation, and monitoring.

This position is funded by the **[FNR (Fonds National de la Recherche)](https://www.fnr.lu)**, Luxembourg's national research fund.

## Collaborators

- **[Prof. Hans-Joachim Wilke](https://www.uni-ulm.de/med/institut-fuer-unfallchirurgische-forschung-und-biomechanik/forschungsfelder/biomechanik-der-wirbelsaeule/)**, Institute of Orthopaedic Research and Biomechanics, University of Ulm, Germany — clinical validation partner with over 30 years of expertise in spine biomechanics, in vitro testing, and intradiscal pressure measurement.
- [MDsim S.A.](https://mdsim.health) — founded by Roger Assaker (CEO, computational mechanics background), Richard Assaker (CMO, Professor of Neurosurgery), and Dany Assaker.

## The SPINEsim Platform

SPINEsim integrates **medical imaging (CT/MRI)**, **AI**, and **advanced biomechanical modeling** to build patient-specific digital twins of the spine. Key capabilities include:

- **Virtual surgical planning** — simulate screw/rod placement for fusion procedures before the operation
- **Load distribution simulation** — predict spinal loading during movement under different surgical configurations
- **Disease progression monitoring** — track biomechanical changes over time
- **Biomechanical consulting** for medical device manufacturers

## Research Focus

My work sits at the intersection of **computational biomechanics** and **clinical evidence generation** for regulatory approval:

- **Verification & Validation (V&V)** of the underlying finite element and rigid body spine models against gold-standard experimental datasets (including Prof. Wilke's in vitro intradiscal pressure and flexibility test data)
- **Clinical validation** against patient outcomes from spine surgery, aiming to demonstrate predictive utility of the digital twin
- Compliance with regulatory frameworks for Software as a Medical Device (**SaMD**, MDR/FDA)
- Quantifying model uncertainty and sensitivity for safety-critical surgical planning decisions

## Why It Matters

Low back pain affects **540 million people worldwide** and is the leading cause of disability globally. Spinal fusion surgery — one of the most common interventions — has significant revision rates (10–20%), partly due to suboptimal surgical planning. Patient-specific computational models like SPINEsim have the potential to reduce revision rates, improve surgical outcomes, and reduce healthcare costs by enabling surgeons to *virtually test* procedures before making incisions.

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/ORS2025b.png" title="Rigid body spine model" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/GSC2025.gif" title="GSC 2025 model visualization" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: Rigid body lumbar spine model inclusive of intra-abdominal pressure (ORS 2025). Right: Animated torso model visualization presented at GSC 2025, Rio de Janeiro.
</div>

## Related Publications

This project builds directly on my doctoral work at McGill University (see related projects below) and extends those models toward clinical deployment within the SPINEsim framework.

- Dukkipati & Driscoll, *IEEE Trans. Biomed. Eng.*, Vol. 72, No. 10, pp. 3108–3119, 2025. [DOI: 10.1109/TBME.2025.3561692](https://doi.org/10.1109/TBME.2025.3561692)
- GSC 2025 — "Evaluation of an IAP-inclusive rigid body dynamic torso model for fast-solving high-fidelity simulations", Rio de Janeiro, Brazil.
- SEM/IMAC-XLIII 2025 — "Development and Validation of a High Fidelity Rigid Body Dynamic Spine Model Inclusive of IAP", Orlando, Florida.
- ORS 2025 — Multiple presentations, Phoenix, Arizona.
