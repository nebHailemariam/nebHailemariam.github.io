export type ReadingItem = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

export type ReadingSection = {
  title: string;
  items: ReadingItem[];
};

export const readingSections: ReadingSection[] = [
  {
    title: "Articles",
    items: [
      {
        href: "https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/",
        title: "Scaling the Instagram Explore recommendations system",
        meta: "August 9, 2023",
        description:
          "How Meta scales Explore with multi-stage ranking, Two Tower neural networks, and retrieval.",
      },
      {
        href: "https://huggingface.co/blog/rlhf",
        title: "Illustrating Reinforcement Learning from Human Feedback (RLHF)",
        description:
          "Comprehensive guide to RLHF: using reinforcement learning to optimize language models with human feedback.",
      },
      {
        href: "https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/plan-and-execute/#create-the-graph",
        title: "Plan-and-Execute (LangGraph)",
        description:
          "Tutorial on building a plan-and-execute style agent in LangGraph.",
      },
      {
        href: "https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html",
        title: "Part 3: Intro to Policy Optimization (Spinning Up)",
        description:
          "Policy gradient derivation, reward-to-go, baselines, and advantage-based policy gradients.",
      },
      {
        href: "https://academy.langchain.com/certificates/pfsyhfhaui",
        title: "Project: Deep Agents",
        description: "Certificate in building deep agents with LangChain.",
      },
      {
        href: "https://academy.langchain.com/certificates/lmvut0v3jc",
        title: "Foundation: Introduction to LangChain - Python",
        description:
          "Certificate in LangChain foundations for building applications with LLMs using Python.",
      },
      {
        href: "https://academy.langchain.com/certificates/arzejdkbkn",
        title: "Foundation: Introduction to LangGraph",
        description:
          "Certificate in LangGraph foundations for building stateful, multi-actor applications with LLMs.",
      },
      {
        href: "https://huggingface.co/blog/train-reranker",
        title:
          "Training and Finetuning Reranker Models with Sentence Transformers v4",
        meta: "March 26, 2025",
        description:
          "Guide to training and finetuning reranker models with Sentence Transformers v4.",
      },
      {
        href: "https://galileo.ai/blog/mastering-rag-how-to-select-a-reranking-model",
        title: "Mastering RAG: How to Select a Reranking Model",
        meta: "Galileo AI",
        description: "Guide to selecting reranking models for RAG systems.",
      },
      {
        href: "https://www.alpha-quantum.com/blog/recommender-systems/introduction-to-recommender-systems-content-based-collaborative-filtering-and-hybrid-recommendation-engines/",
        title:
          "Introduction to Recommender Systems: Content-Based, Collaborative Filtering, and Hybrid Recommendation Engines",
        meta: "Alpha Quantum",
        description:
          "Introduction to recommender systems: content-based, collaborative, and hybrid approaches.",
      },
      {
        href: "https://sidsite.com/posts/autodiff/",
        title: "Reverse-mode automatic differentiation from scratch, in Python",
        meta: "June 11, 2020",
        description:
          "Building a minimal autodiff framework from scratch with Python implementation.",
      },
      {
        href: "http://towardsdatascience.com/a-practical-guide-to-contrastive-learning-26e912c0362f/",
        title: "A Practical Guide to Contrastive Learning",
        meta: "July 30, 2024",
        description:
          "Building SimSiam models with FashionMNIST for self-supervised learning.",
      },
    ],
  },
  {
    title: "Books",
    items: [
      {
        href: "https://www.manning.com/books/build-a-deepseek-model-from-scratch",
        title: "Build a DeepSeek Model (From Scratch)",
        meta: "R. A. Dandekar et al., 2025",
        description:
          "Learn how to build DeepSeek's core innovations including Multi-Head Latent Attention, Mixture-of-Experts, and Multi-Token Prediction from scratch.",
      },
      {
        href: "https://www.oreilly.com/library/view/building-recommendation-systems/9781492097983/",
        title: "Building Recommendation Systems in Python and JAX",
        meta: "B. Bischof and H. Yee, 2023",
        description:
          "O'Reilly Media publication on building recommendation systems using Python and JAX.",
      },
      {
        href: "https://web.stanford.edu/~jurafsky/slp3/",
        title: "Speech and Language Processing",
        meta: "D. Jurafsky and J. H. Martin, 2024",
        description:
          "Comprehensive introduction to NLP, computational linguistics, and speech recognition.",
      },
    ],
  },
  {
    title: "Research Papers",
    items: [
      {
        href: "https://arxiv.org/abs/2512.24601",
        title: "Recursive Language Models",
        meta: "A. L. Zhang et al., 2025",
        description:
          "An inference-time paradigm that treats long prompts as external environment state, accessed via a REPL and recursive sub-calls.",
      },
      {
        href: "https://arxiv.org/abs/1512.03385",
        title: "Deep Residual Learning for Image Recognition",
        meta: "K. He et al., 2015",
        description:
          "Residual blocks with identity shortcuts (F(x) + x) to train very deep networks and mitigate the degradation problem on plain stacks.",
      },
      {
        href: "https://arxiv.org/abs/1502.03167",
        title:
          "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
        meta: "S. Ioffe and C. Szegedy, 2015",
        description:
          "Normalizes mini-batch activations with learnable scale and shift to reduce internal covariate shift and stabilize deep network training.",
      },
      {
        href: "https://arxiv.org/abs/1409.0473",
        title:
          "Neural Machine Translation by Jointly Learning to Align and Translate",
        meta: "D. Bahdanau et al., 2014",
        description:
          "Encoder-decoder NMT with a learnable soft-attention mechanism over encoder states, especially for long sentences.",
      },
      {
        href: "https://arxiv.org/abs/1706.03762",
        title: "Attention Is All You Need",
        meta: "A. Vaswani et al., 2017",
        description:
          "The Transformer architecture built entirely on self-attention, enabling parallel training and state-of-the-art machine translation.",
      },
      {
        href: "https://arxiv.org/abs/1810.04805",
        title:
          "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        meta: "J. Devlin et al., 2018",
        description:
          "Bidirectional Transformer encoder pre-trained with Masked LM and Next Sentence Prediction, then fine-tuned for state-of-the-art NLP tasks.",
      },
      {
        href: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
        title: "Language Models are Unsupervised Multitask Learners",
        meta: "A. Radford et al., 2019",
        description:
          "GPT-2 shows that large language models can perform many NLP tasks in a zero-shot setting without task-specific fine-tuning.",
      },
      {
        href: "https://arxiv.org/abs/1406.2661",
        title: "Generative Adversarial Nets",
        meta: "I. J. Goodfellow et al., 2014",
        description:
          "Adversarial training with a generator and discriminator in a minimax game to learn generative models without explicit density estimation.",
      },
      {
        href: "https://arxiv.org/abs/1301.3781",
        title: "Efficient Estimation of Word Representations in Vector Space",
        meta: "T. Mikolov et al., 2013",
        description:
          "CBOW and Skip-gram architectures for learning dense word vectors at scale with lower training cost than earlier neural language models.",
      },
      {
        href: "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf",
        title: "A Neural Probabilistic Language Model",
        meta: "Y. Bengio et al., 2003",
        description:
          "Early feed-forward language model with learned word embeddings that mitigates the curse of dimensionality in n-gram modeling.",
      },
      {
        href: "https://arxiv.org/abs/2105.14491",
        title: "How Attentive are Graph Attention Networks?",
        meta: "S. Brody et al., 2021",
        description:
          "Analysis showing that GAT computes only static attention, and introduction of GATv2 with dynamic attention that is strictly more expressive.",
      },
      {
        href: "https://arxiv.org/abs/2002.02126",
        title:
          "LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation",
        meta: "X. He et al., 2020",
        description:
          "A simplified Graph Convolutional Network for collaborative filtering that removes unnecessary components and achieves significant performance improvements.",
      },
      {
        href: "https://arxiv.org/abs/1806.01973",
        title:
          "Graph Convolutional Neural Networks for Web-Scale Recommender Systems",
        meta: "R. Ying et al., 2018",
        description:
          "PinSage: A large-scale Graph Convolutional Network deployed at Pinterest for web-scale recommendation with billions of items and users.",
      },
    ],
  },
];
