---
title: "Beyond model context, processing arbitrarily long prompts"
date: "2026-06-17"
category: "Paper notes"
excerpt: "Zhang et al. (2025) propose Recursive Language Models—accessing long prompts via a REPL and recursive self-calls instead of stuffing them into context."
---

## Paper info

**Title:** [Recursive Language Models](https://arxiv.org/abs/2512.24601)

**Authors:** Alex L. Zhang, Tim Kraska, Omar Khattab

## TL;DR

Language models struggle to process arbitrarily long prompts. This research proposes Recursive Language Models, a paradigm that changes how language models handle a multitude of long prompts by avoiding context overload and instead accessing prompts using a Read-Eval-Print-Loop process and recursive self-calls. This method outperforms frontier scaffolds like CodeAct and Claude Code.

## Context

There are two main ways to handle long prompts in language modeling: the first option is redesigning the model's architecture and retraining to handle longer context, and the second is designing an inference-time scaffolding technique to handle a multitude of texts. Some common scaffolding strategies are compaction with periodic summarization and truncation. These strategies, however, come at the cost of losing fine-grained context information and struggling with tasks that require every line of the prompt.

## Main idea

A Recursive Language Model is yet another inference-time scaffolding technique that overcomes the challenges of losing fine-grained information common in compaction and truncation scaffolding strategies. It redesigns long prompts to be outside the context window and part of the environment. The root instruction to the RLM contains parts of the prompt, including its metadata, such as its prefix and length, and the way it can access the prompt. This allows it to generate code to transform the prompt and invoke sub-RLMs.

Every iteration updates REPL state and collects and stores constant-sized metadata (short prefix, length) from any printed stdout. The iteration terminates when the RLM generates a Final output token inside the REPL, and the result is returned.

```
Algorithm 1: A recursive language model, around LLM M, which itself acts as a "language model".

Input:  prompt P
Output: response Y

state ← InitREPL(prompt = P)
state ← AddFunction(state, sub_RLM_M)
hist  ← [Metadata(state)]

while True:
    code ← LLM_M(hist)
    (state, stdout) ← REPL(state, code)
    hist ← hist ∥ code ∥ Metadata(stdout)
    if state[Final] is set:
        return state[Final]
```

## Results

The authors benchmark RLMs on four long-context tasks against three baselines: GPT-5 with compaction, CodeAct with sub-calls, and Claude Code. The first is a frontier vanilla LLM with a common long-context strategy; the latter two are long-context coding scaffolds. RLMs outperform all three, with median improvements across the tasks of 26%, 130%, and 13%, respectively.

RLMs solve the problem of long prompts, but at a cost. They are prone to making recursive sub-calls and to increasing token spending.
