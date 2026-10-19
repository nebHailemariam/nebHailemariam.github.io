export type ReadingItem = {
  href: string;
  title: string;
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
        href: "https://huggingface.co/blog/train-sentence-transformers",
        title:
          "Training and Finetuning Embedding Models with Sentence Transformers",
      },
      {
        href: "https://huggingface.co/blog/train-sparse-encoder",
        title:
          "Training and Finetuning Sparse Embedding Models with Sentence Transformers",
      },
      {
        href: "https://huggingface.co/blog/train-multi-vector-encoder",
        title:
          "Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers",
      },
      {
        href: "https://sbert.net/examples/sentence_transformer/training/distillation/README.html",
        title: "Model Distillation",
      },
      {
        href: "https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/",
        title: "Scaling the Instagram Explore recommendations system",
      },
      {
        href: "https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html",
        title: "Part 3: Intro to Policy Optimization (Spinning Up)",
      },
      {
        href: "https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/plan-and-execute/#create-the-graph",
        title: "Plan-and-Execute (LangGraph)",
      },
      {
        href: "https://academy.langchain.com/certificates/pfsyhfhaui",
        title: "Project: Deep Agents",
      },
      {
        href: "https://huggingface.co/blog/rlhf",
        title: "Illustrating Reinforcement Learning from Human Feedback (RLHF)",
      },
      {
        href: "https://academy.langchain.com/certificates/lmvut0v3jc",
        title: "Foundation: Introduction to LangChain - Python",
      },
      {
        href: "https://academy.langchain.com/certificates/arzejdkbkn",
        title: "Foundation: Introduction to LangGraph",
      },
      {
        href: "https://huggingface.co/blog/train-reranker",
        title:
          "Training and Finetuning Reranker Models with Sentence Transformers v4",
      },
      {
        href: "https://galileo.ai/blog/mastering-rag-how-to-select-a-reranking-model",
        title: "Mastering RAG: How to Select a Reranking Model",
      },
      {
        href: "https://www.alpha-quantum.com/blog/recommender-systems/introduction-to-recommender-systems-content-based-collaborative-filtering-and-hybrid-recommendation-engines/",
        title:
          "Introduction to Recommender Systems: Content-Based, Collaborative Filtering, and Hybrid Recommendation Engines",
      },
      {
        href: "https://sidsite.com/posts/autodiff/",
        title: "Reverse-mode automatic differentiation from scratch, in Python",
      },
      {
        href: "http://towardsdatascience.com/a-practical-guide-to-contrastive-learning-26e912c0362f/",
        title: "A Practical Guide to Contrastive Learning",
      },
    ],
  },
  {
    title: "Books",
    items: [
      {
        href: "https://www.manning.com/books/build-a-deepseek-model-from-scratch",
        title: "Build a DeepSeek Model (From Scratch)",
      },
      {
        href: "https://www.oreilly.com/library/view/building-recommendation-systems/9781492097983/",
        title: "Building Recommendation Systems in Python and JAX",
      },
      {
        href: "https://web.stanford.edu/~jurafsky/slp3/",
        title: "Speech and Language Processing",
      },
    ],
  },
  {
    title: "Research Papers",
    items: [
      {
        href: "https://arxiv.org/abs/2302.13971",
        title: "LLaMA: Open and Efficient Foundation Language Models",
      },
      {
        href: "https://arxiv.org/abs/2005.11401",
        title:
          "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      },
      {
        href: "https://arxiv.org/abs/2304.08485",
        title: "Visual Instruction Tuning",
      },
      {
        href: "https://arxiv.org/abs/2010.11929",
        title:
          "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
      },
      {
        href: "https://arxiv.org/abs/2103.00020",
        title:
          "Learning Transferable Visual Models From Natural Language Supervision",
      },
      {
        href: "https://arxiv.org/abs/2608.10187",
        title:
          "ConnectionMind: Leveraging Social Networks and Large Language Models for Personalized Recommendation at Meta",
      },
      {
        href: "https://aclanthology.org/2025.findings-acl.543.pdf",
        title:
          "Optimized Text Embedding Models and Benchmarks for Amharic Passage Retrieval",
      },
      {
        href: "https://aclanthology.org/2026.mellm-1.19.pdf",
        title:
          "The Multilingual Curse at the Retrieval Layer: Evidence from Amharic",
      },
      {
        href: "https://arxiv.org/abs/2201.11903",
        title:
          "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      },
      {
        href: "https://arxiv.org/abs/2203.02155",
        title:
          "Training language models to follow instructions with human feedback",
      },
      {
        href: "https://arxiv.org/abs/2005.14165",
        title: "Language Models are Few-Shot Learners",
      },
      {
        href: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
        title: "Language Models are Unsupervised Multitask Learners",
      },
      {
        href: "https://arxiv.org/abs/1810.04805",
        title:
          "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      },
      {
        href: "https://arxiv.org/abs/1706.03762",
        title: "Attention Is All You Need",
      },
      {
        href: "https://arxiv.org/abs/1512.03385",
        title: "Deep Residual Learning for Image Recognition",
      },
      {
        href: "https://arxiv.org/abs/1406.2661",
        title: "Generative Adversarial Nets",
      },
      {
        href: "https://arxiv.org/abs/1409.0473",
        title:
          "Neural Machine Translation by Jointly Learning to Align and Translate",
      },
      {
        href: "https://arxiv.org/abs/1301.3781",
        title: "Efficient Estimation of Word Representations in Vector Space",
      },
      {
        href: "https://arxiv.org/abs/1502.03167",
        title:
          "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
      },
      {
        href: "https://arxiv.org/abs/2512.24601",
        title: "Recursive Language Models",
      },
      {
        href: "https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf",
        title: "A Neural Probabilistic Language Model",
      },
      {
        href: "https://arxiv.org/abs/2105.14491",
        title: "How Attentive are Graph Attention Networks?",
      },
      {
        href: "https://arxiv.org/abs/2002.02126",
        title:
          "LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation",
      },
      {
        href: "https://arxiv.org/abs/1806.01973",
        title:
          "Graph Convolutional Neural Networks for Web-Scale Recommender Systems",
      },
    ],
  },
];
