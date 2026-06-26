---
title: "The genesis of a Neural Probabilistic Language Model"
date: "2026-06-14"
category: "Paper notes"
excerpt: "A Neural Probabilistic Language Model"
---

## Paper info

**Title:** [A Neural Probabilistic Language Model](https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf)

**Authors:** Yoshua Bengio, Réjean Ducharme, Pascal Vincent, Christian Jauvin

## TL;DR

This research is among the earliest attempts to build language models using neural networks. Bengio et al. propose a feed-forward neural language model that utilizes the concatenation of feature vectors from the input vocabulary to model the joint distribution over the word sequence. They were able to mitigate the curse of dimensionality, the difficulty of learning due to the large size of the vocabulary.

## Context

Prior to this research, language models were mostly implemented using n-gram models, a technique that assigns probabilities to text sequences using a table of probabilities based on their occurrence in the training corpus. n-gram models have several drawbacks. As the vocab size and the context length increase, the possible combinations of words explode exponentially—the curse of dimensionality. For a trigram model to fit a vocabulary of 100,000 words, it would need to store $100{,}000^3$ combinations. Furthermore, n-gram models are incapable of semantic understanding.

```
Training: The man was eating ice cream.
Test:     The woman was eating ice cream.
```

An n-gram model wouldn't be able to infer any semantic relationship between a man and a woman, or correctly assign the right probabilities. Moreover, it suffers from data sparsity—it assigns zero probabilities to any phrase that isn't in the training dataset.

The neural model learns to estimate the joint distribution as:

$$
\hat{P}(Z_1 = z_1, \cdots, Z_n = z_n) = \prod_i \hat{P}\big(Z_i = z_i \mid g_i(Z_{i-1} = z_{i-1}, Z_{i-2} = z_{i-2}, \cdots, Z_1 = z_1)\big)
$$

## Model

Each context word is mapped to an $m$-dimensional embedding via a matrix $C$ of shape $|V| \times m$, where $C(i) \in \mathbb{R}^m$. Those vectors are concatenated and passed through a function $g$ that maps $(C(w_{t-n+1}), \cdots, C(w_{t-1}))$ to a score for each vocabulary item.

$$
f(i, w_{t-1}, \cdots, w_{t-n+1}) = g\big(i, C(w_{t-1}), \cdots, C(w_{t-n+1})\big)
$$

Softmax normalizes those scores into a probability distribution over the vocabulary.

$$
\hat{P}(w_t \mid w_{t-1}, \cdots, w_{t-n+1}) = \frac{e^{y_{w_t}}}{\sum_i e^{y_i}}
$$

The model is optimized by maximizing the log likelihood over the training data.

$$
L = \frac{1}{T} \sum_t \log \hat{P}(w_t \mid w_{t-1}, \cdots, w_{t-n+1}) + R(\theta)
$$

The model's parameters are updated using Stochastic Gradient Descent.

$$
\theta \leftarrow \theta + \varepsilon \frac{\partial \log \hat{P}(w_t \mid w_{t-1}, \cdots, w_{t-n+1})}{\partial \theta}
$$

## Training and Results

Training the proposed Neural Language Model in 2003 was computationally challenging. The authors tried Parallel training, namely Data-Parallel Processing on a shared-memory multiprocessor and Parameter-Parallel Processing on a cluster of machines. Data-Parallel Processing allows multiple processors to work on different subsets of the data and update the model in shared memory. Parameter-Parallel Processing splits the model's parameters across different CPUs.

Experiments were run on the Brown corpus (1,181,041 words; $|V| = 16{,}383$) and AP News (~14 million words; $|V| = 17{,}964$). On Brown, the best neural model reached test perplexity 252 versus 312 for the strongest n-gram, a ~24% improvement. On AP News, the gap was smaller: 109 versus 117 (~8%).

The research proposes to use Mixture of Models, an approach that combines an MLE model with an interpolated trigram: $\lambda_3 P(w_t \mid w_{t-2}, w_{t-1}) + \lambda_2 P(w_t \mid w_{t-1}) + \lambda_1 P(w_t)$. The design yields lower perplexity, which represents the model's ability to express the validation data.

$$
\mathrm{PP} = \left(\prod_t \hat{P}(w_t \mid w_{t-1}, \cdots, w_{t-n+1})\right)^{-1/T}
$$

## Conclusion

This research demonstrated that MLPs can be trained for language modeling, and that word representations can mitigate the curse of dimensionality. In hindsight, results could have been stronger with subword tokenization like Byte Pair Encoding—which only appeared in 2016, over a decade after the paper was published.
