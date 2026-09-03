---
title: "LoRA: Low-rank matrices for fast and efficient fine-tuning"
date: "2026-09-02"
category: "Paper notes"
excerpt: "LoRA: Low-Rank Adaptation of Large Language Models"
---

## Paper info

[LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)  
Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen  
Microsoft, 2021

## TL;DR

Retraining all network parameters requires extensive compute resources. To address this challenge, the authors propose LoRA, which injects trainable low-rank weight matrices to reduce the number of trainable parameters. Empirical investigations demonstrate the effectiveness of the method without introducing additional inference latency.

## Context

Large language models range from a few hundred million parameters, like OpenAI GPT-1 [1], BERT [2], and RoBERTa [3], to hundreds of billions of parameters like GPT-3 [4]. Many of these models are pretrained at large scale.

Fine-tuning them for downstream tasks updates all the parameters of the models, which requires extensive compute resources to facilitate the process of making the models experts in a specific domain.

Previous research has sought to address this challenge mainly by utilizing two options: training only a few parameters out of all the model parameters or training a separate network outside the pre-trained model on a domain-specific task.

Many of the existing solutions, like adapters [5], introduce inference latency because they add sequential computation, and many fail to match the performance of a fine-tuned baseline model. Also, techniques such as prefix tuning [6] are difficult to optimize and reduce the sequence length available for the model to process the input for downstream tasks.

## Main idea

To address these problems, the authors present Low-Rank Adaptation (LoRA), an approach inspired by Li et al. [7] and Aghajanyan et al. [8], who hypothesized that an LLM's parameters are over-parameterized and that the actual learned solution could lie in a small space and can still learn in a lower space despite a random projection.

The authors present a solution that can:

1. Learn several LoRA modules for separate downstream tasks that can effectively be deployed on a shared network and efficiently switched between the LoRA modules at inference time.

2. Reduce the barrier to the computational resources needed to fine-tune models—gradients aren't calculated for many weight parameters but only for the injected weight matrices.

3. Be deployed without introducing inference-time latency.

The rank of a matrix is the number of independent pieces of information in a matrix; low rank means the matrix can be described with few independent directions.

Aghajanyan et al. [8] showed that pre-trained language models can efficiently learn without performance degradation after random projection into a lower space. Inspired by this, the authors hypothesize that the weight updates during adaptation have a low intrinsic rank—that is, the minimum rank (independent directions in a matrix) needed to capture the update can be much smaller than the full matrix rank.

The authors propose LoRA for a pretrained weight:

$$
W_0 \in \mathbb{R}^{d \times k}
$$

They reparameterize the update as:

$$
W_0 + \Delta W = W_0 + BA
$$

where:

- $B \in \mathbb{R}^{d \times r}$
- $A \in \mathbb{R}^{r \times k}$
- the rank $r \ll \min(d, k)$

$W_0$ is frozen from the pretrained model; only $A$ and $B$ are trainable.

For an input $x \in \mathbb{R}^k$, the forward pass is:

$$
h = W_0 x + BA x
$$

with dimensions:

- $W_0 x \in \mathbb{R}^d$
- $A x \in \mathbb{R}^r$
- $B(Ax) \in \mathbb{R}^d$

So $BA$ is a $d \times k$ update of rank at most $r$, but training only needs $dr + rk$ parameters instead of $dk$.

The main advantage of LoRA is that the learned weight matrices can be merged with the pretrained weights, so that latency isn't introduced at the time of inference.

## Results and conclusion

The optimal rank for the LoRA matrices is surprisingly very small. The authors run several experiments showing that increasing the rank often doesn't improve performance, meaning a small rank can sufficiently learn the subspace.

Empirical results show that LoRA reduced the number of trainable parameters for GPT-3 175B by 10,000 times and reduced the GPU memory requirements by 3 times. The results on LoRA versions of RoBERTa, DeBERTa, GPT-2, and GPT-3 models show that the quality of these models is on par with, if not better than, fine-tuned models, proving the effectiveness of their technique.

## References

[1] [Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)  
Alec Radford, Karthik Narasimhan, Tim Salimans, and Ilya Sutskever. OpenAI, 2018.

[2] [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805)  
Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2018.

[3] [RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/abs/1907.11692)  
Yinhan Liu, Myle Ott, Naman Goyal, et al. 2019.

[4] [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)  
Tom B. Brown, Benjamin Mann, Nick Ryder, et al. OpenAI, 2020.

[5] [Parameter-Efficient Transfer Learning for NLP](https://arxiv.org/abs/1902.00751)  
Neil Houlsby, Andrei Giurgiu, Stanislaw Jastrzebski, et al. 2019.

[6] [Prefix-Tuning: Optimizing Continuous Prompts for Generation](https://arxiv.org/abs/2101.00190)  
Xiang Lisa Li and Percy Liang. 2021.

[7] [Measuring the Intrinsic Dimension of Objective Landscapes](https://arxiv.org/abs/1804.08838)  
Chunyuan Li, Heerad Farkhoor, Rosanne Liu, and Jason Yosinski. 2018.

[8] [Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning](https://arxiv.org/abs/2012.13255)  
Armen Aghajanyan, Luke Zettlemoyer, and Sonal Gupta. 2020.
