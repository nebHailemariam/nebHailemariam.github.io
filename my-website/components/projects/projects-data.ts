export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectPreview =
  | {
      type: "image";
      href: string;
      src: string;
      alt: string;
      fallbackSrc?: string;
    }
  | { type: "paper"; href: string; label: string };

export type Project = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  links: ProjectLink[];
  preview: ProjectPreview;
};

export const projects: Project[] = [
  {
    id: "nebtorch",
    title: "NebTorch — Minimal Autograd Engine",
    tags: ["NumPy", "Autograd", "Deep Learning", "PyTorch"],
    description:
      "NebTorch is a minimal Autograd engine built from scratch using NumPy, inspired by PyTorch's automatic differentiation system. After completing and serving as a TA for 11-785: Introduction to Deep Learning at CMU taught by Prof. Bhiksha Raj, I was inspired to build my own Autograd engine from scratch. Building NebTorch has been very rewarding—I've solidified my understanding of Deep Learning and Automatic Differentiation, and gained appreciation for frameworks such as PyTorch and TensorFlow.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/nebHailemariam/NebTorch",
      },
    ],
    preview: {
      type: "image",
      href: "https://github.com/nebHailemariam/NebTorch",
      src: "https://opengraph.githubassets.com/1/nebHailemariam/NebTorch",
      alt: "NebTorch repository preview",
    },
  },
  {
    id: "deepresearch-langgraph",
    title: "DeepResearch-LangGraph — Multi-Agent Research System",
    tags: [
      "LangGraph",
      "LangChain",
      "Multi-Agent",
      "Fan-in/out",
      "Parallel Execution",
      "Python",
    ],
    description:
      "DeepResearch-LangGraph is a multi-agent research system built using LangGraph, designed to enable deep, autonomous research capabilities through multi-agent AI. The system leverages LangGraph's stateful architecture with PostgreSQL checkpoints to orchestrate complex research workflows, allowing multiple specialized agents to work together on research tasks, information gathering, and synthesis.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/nebHailemariam/DeepResearch-LangGraph",
      },
    ],
    preview: {
      type: "image",
      href: "https://github.com/nebHailemariam/DeepResearch-LangGraph",
      src: "https://opengraph.githubassets.com/1/nebHailemariam/DeepResearch-LangGraph",
      alt: "DeepResearch-LangGraph repository preview",
    },
  },
  {
    id: "deepseek-mini",
    title: "DeepSeek-Mini — DeepSeek Model Components Implementation",
    tags: [
      "PyTorch",
      "Mixture of Experts",
      "Multi-head Latent Attention",
      "RoPE",
      "Deep Learning",
    ],
    description:
      "DeepSeek-Mini is an implementation of DeepSeek's major novel components for learning and experimentation purposes. This repository includes implementations of Mixture of Experts (MOE) with shared expert networks, Multi-head Latent Attention (MLA) mechanism for optimized inference with KV-caching, and Rotary Positional Encoding (RoPE). Building these components from scratch has solidified my understanding of MLA kv-caching and MOE model architecture, which helps reduce inference latency in transformer models.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/nebHailemariam/deepseek-mini",
      },
    ],
    preview: {
      type: "image",
      href: "https://github.com/nebHailemariam/deepseek-mini",
      src: "https://opengraph.githubassets.com/1/nebHailemariam/deepseek-mini",
      alt: "deepseek-mini repository preview",
    },
  },
  {
    id: "gorse-dotnet",
    title: "Gorse Recommender System — .NET Library Enhancement",
    tags: ["C#", ".NET", "Recommender Systems", "Open Source"],
    description:
      "Contributed to the Gorse recommender system, an open-source machine learning recommendation engine written in Go. Enhanced the .NET library for Gorse, improving the machine learning ecosystem and making the recommender system more accessible to .NET developers. This contribution demonstrates my commitment to open source development and my ability to work across different programming languages and frameworks.",
    links: [
      { label: "GitHub Repository", href: "https://github.com/gorse-io/gorse" },
    ],
    preview: {
      type: "image",
      href: "https://github.com/gorse-io/gorse",
      src: "https://opengraph.githubassets.com/1/gorse-io/gorse",
      alt: "Gorse.NET repository preview",
    },
  },
  {
    id: "xlmr-amasquad",
    title: "XLM-R Based Extractive Amharic QA with AmaSQuAD",
    tags: ["NLP", "XLM-R", "PyTorch", "Hugging Face"],
    description:
      "Completed my thesis project at Carnegie Mellon University in multilingual question-answering research (NLP). Developed a novel framework for translating the SQuAD 2.0 dataset into Amharic, resulting in the creation of an open-source dataset called AmaSQuAD. Implemented a translation-based data generation framework valuable for extractive Question Answering (QA) systems, contributing to the advancement of NLP for low-resource languages. Leveraged XLM-R, a pre-trained language model, and fine-tuned it specifically for Amharic QA tasks, achieving 7% F1 improvements in baseline performance. The dataset is publicly available on Hugging Face.",
    links: [
      { label: "arXiv Paper", href: "https://arxiv.org/abs/2502.02047" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/nebhailema/AmaSquad",
      },
    ],
    preview: {
      type: "image",
      href: "https://arxiv.org/abs/2502.02047",
      src: "https://arxiv.org/html/2502.02047v1/extracted/6180843/amasquad_architecture.png",
      alt: "AmaSQuAD paper preview",
      fallbackSrc:
        "https://static.arxiv.org/static/browse/0.3.4/images/arxiv-logo-fb.png",
    },
  },
  {
    id: "rain-gauge",
    title: "Machine Learning Based Rain Gauge Using Acoustic Data",
    tags: ["CNN", "PyTorch", "Audio Processing", "Regression"],
    description:
      "Addressed the challenges of conventional weather stations such as high setup costs, instrument fragility, and measurement errors by exploring alternative sound sources for making rainfall predictions. Used a Convolutional Neural Network (CNN) regression model using PyTorch and TensorFlow to estimate rainfall intensities from MFCCs extracted from acoustic recordings. Employed CNN model and achieved a Mean Absolute Percentage Error (MAPE) of 35.20% and a Mean Squared Error (MSE) of 0.66, outperforming a baseline SVR model with 152.55% MAPE and 1.73 MSE.",
    links: [
      {
        label: "IEEE Paper",
        href: "https://ieeexplore.ieee.org/document/10293700",
      },
    ],
    preview: {
      type: "paper",
      href: "https://ieeexplore.ieee.org/document/10293700",
      label: "IEEE Paper",
    },
  },
];
