import { Accordion, Container } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import styles from "./styles.module.css";

function Projects() {
  return (
    <Container id="start" className="justify-content-center">
      <br></br>
      <Accordion flush>
        <Accordion.Item eventKey="0" className="bg-primary">
          <Accordion.Header>Pattern Recongition Receptors</Accordion.Header>
          <Accordion.Body>
            We identified several conserved amino acids within the ScArv1
            homology domain (ScAhd) required for maintaining normal azole
            susceptibility. Erg11 lanosterol 14-α-demethylase is the
            rate-limiting enzyme in sterol biosynthesis and is the direct target
            of azole antifungals, so we used our ScArv1 mutants in order to
            explore the relationship between ScArv1 and ScErg11. Specific ScArv1
            mutants ectopically expressed from a low copy plasmid were unable to
            restore normal azole susceptibility to Scarv1 cells and had reduced
            Erg11 protein levels. Erg11 protein stability depended on its
            ability to form a heterodimeric complex with Arv1. Complex formation
            was required for maintaining normal azole susceptibility.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="bg-primary">
          <Accordion.Header>Sterol Related Pathway</Accordion.Header>
          <Accordion.Body>
            Sphingolipids are major constituents of membranes. A number of S.
            cerevisiae sphingolipid intermediates such as long chains sphingoid
            bases (LCBs) and ceramides act as signaling molecules regulating
            cell cycle progression, adaptability to heat stress, and survival in
            response to starvation. Here we show that S. cerevisiae haploid
            cells must synthesize ceramide in order to induce mating specific
            cell cycle arrest. Cells devoid of sphingolipid biosynthesis or
            defective in ceramide synthesis are sterile and harbor defects in
            pheromone-induced MAP kinase-dependent transcription. Analyses of
            G1/S cyclin levels indicate that mutant cells cannot reduce Cln1/2
            levels in response to pheromone. FACS analysis indicates a lack of
            ability to arrest. The addition of LCBs to sphingolipid deficient
            cells restores MAP kinase-dependent transcription, reduces cyclin
            levels, and allows for mating, as does the addition of a cell
            permeable ceramide to cells blocked at ceramide synthesis.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="bg-primary">
          <Accordion.Header>De Novo Lipogenesis</Accordion.Header>
          <Accordion.Body>
            Genome-wide association studies (GWAS) have linked IGF2BP2
            single-nucleotide polymorphisms (SNPs) with type 2 diabetes (T2D).
            Mice overexpressing mIGF2BP2 have elevated cholesterol levels when
            fed a diet that induces hepatic steatosis. These and other studies
            suggest an important role for insulin growth factor 2 mRNA binding
            protein 2 (IGF2BP2) in the initiation and progression of several
            metabolic disorders. The ATPase binding cassette protein ABCA1
            initiates nascent high-density apolipoprotein (HDL) biogenesis by
            transferring phospholipid and cholesterol to delipidated
            apolipoprotein AI (ApoAI). Individuals with mutational ablation of
            ABCA1 have Tangier disease, which is characterized by a complete
            loss of HDL.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Projects;
