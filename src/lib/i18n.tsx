import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ko" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en;
};

const translations = {
  ko: {
    header: {
      nav: ["기능", "워크스페이스", "활용 대상"],
      beta: "베타",
    },
    hero: {
      badge: "AI 기반 특허 인텔리전스 — 프라이빗 베타 진행 중",
      titleTop: "특허 분석의",
      titleBottom: "새로운 기준.",
      body:
        "PatentLens는 유사 특허 탐색, 선행참조문헌 분석, 경쟁 기술 동향을 하나의 AI 워크스페이스로 통합합니다. 변리사와 R&D 전략팀이 근거 중심으로 더 빠르게 판단하도록 돕습니다.",
      note: "현재 랜딩 화면은 제품 방향과 예시 워크플로우를 설명하는 용도입니다.",
      patents: "1.4억+ 글로벌 특허 색인",
      offices: "EPO · USPTO · KIPO · JPO · WIPO",
    },
    trust: {
      slots: ["reference-1", "reference-2", "reference-3", "reference-4"],
    },
    metrics: [
      { value: "1.4억+", label: "색인된 특허", sub: "USPTO · EPO · WIPO · KIPO · JPO" },
      { value: "98.4%", label: "의미 검색 recall@10", sub: "전문가 선별 세트 기준 벤치마크" },
      { value: "<1.2초", label: "검색 응답 중앙값", sub: "하이브리드 검색 + 재랭킹" },
      { value: "12년", label: "인용 그래프 깊이", sub: "전방·후방 인용 전파 분석" },
    ],
    features: {
      eyebrow: "플랫폼 기능",
      title: "모든 분석은 설명 가능한 근거 위에서 동작합니다.",
      body:
        "논리적 추론에 기반한 설명 가능한 근거를 통해, 침해 분석부터 기술 전략까지 모든 워크플로우를 같은 맥락에서 연결합니다.",
      items: [
        {
          title: "의미 기반 특허 검색",
          body: "BM25와 벡터 검색을 결합하고 청구항 단위로 재랭킹합니다. 자연어, 청구항, 명세서 전체로 검색할 수 있습니다.",
        },
        {
          title: "선행기술·신규성 분석",
          body: "청구항 간 유사도 히트맵, 신규성 리스크 점수, 진보성 검토를 원문 근거와 함께 제공합니다.",
        },
        {
          title: "인용 그래프 인텔리전스",
          body: "전방·후방 인용, 패밀리 관계, 소송 연결 정보를 여러 관할권에 걸쳐 탐색합니다.",
        },
        {
          title: "기술 트렌드 분석",
          body: "IPC/CPC 기술 클러스터별 출원 속도, 공백 기술, 초기 신호를 시계열로 추적합니다.",
        },
        {
          title: "경쟁사 모니터링",
          body: "출원인 포트폴리오, 신규 출원, 전략 변화 신호를 주간 브리핑 형태로 추적합니다.",
        },
        {
          title: "보고서 작성·내보내기",
          body: "차트, 청구항 비교, 인용 근거를 조합해 PDF와 DOCX 보고서를 빠르게 생성합니다.",
        },
        {
          title: "설명 가능한 AI 인사이트",
          body: "모든 요약과 비교 결과는 문단, 청구항, 관계 구조에 연결된 설명 가능한 근거와 함께 제시됩니다.",
        },
        {
          title: "다국어 특허 해석",
          body: "국문과 영문 특허를 같은 맥락에서 읽고 비교할 수 있도록 핵심 기술 요소를 일관된 구조로 정리합니다.",
        },
      ],
    },
    preview: {
      eyebrow: "워크스페이스 미리보기",
      title: "검색부터 보고서까지, 근거 중심으로 연결됩니다.",
      body:
        "검색 결과, 인용 그래프, 청구항 비교, 트렌드 차트가 하나의 문맥을 공유해 모든 AI 인사이트가 원문 데이터에 고정됩니다.",
      bullets: [
        "청구항 단위 재랭킹을 포함한 하이브리드 검색",
        "신규성·진보성 리스크 스코어링",
        "청구항 병렬 비교 편집기",
        "검증 가능한 인용 근거가 포함된 보고서 내보내기",
      ],
      sampleLabel: "예시 검색 화면",
      results: "1,284건 중 5건",
      reranked: "재랭킹 · v3.2",
      aiRelevance: "AI 관련도",
      aiBody:
        "상위 결과는 조건부 전문가 라우팅 기법으로 수렴합니다. KR 10-2456789는 US 11,482,931이 해결한 게이팅 방식과 동일한 구조를 사용하며, 추론 지연 개선 효과 클러스터와 연결됩니다.",
      filingTrend: "출원 추이",
      riskDetected: "고위험 청구항 2개 감지",
      summaryLabel: "요약 상태",
    },
    knowledge: {
      eyebrow: "기반 지식 그래프",
      title: "Ontology + reasoning 기반의 구조화된 특허 해석 레이어.",
      body:
        "PatentLens는 한국과 미국 특허를 아우르는 OWL 기반 지식 그래프 위에 구축됩니다. 모든 문서는 문제·해결수단·기술·효과 요소로 분해되고, PFE처럼 레이어드된 모듈형 온톨로지와 논리적 추론을 통해 IPC 계층과 KSIC 산업 분류까지 연결됩니다. 이 구조는 사용자 유형을 함께 해석해, 변리사와 R&D 담당자에게 더 맞는 분석 흐름으로 이어지도록 설계됩니다.",
      stats: [
        { k: "지식 그래프", v: "Neo4j · n10s exporter" },
        { k: "의미 유사도", v: "bge-m3 임베딩 · RELATED_TO kNN" },
        { k: "분류·유형 체인", v: "Patent → IPC → KSIC + persona-aware flow" },
        { k: "LLM 추출", v: "Problem · Solution · Technique · Effect" },
      ],
      entities: "핵심 엔티티",
      relations: "관계 타입",
    },
    personas: [
      {
        eyebrow: "변리사를 위한 워크플로우",
        title: "몇 주가 걸리던 선행기술 포지션을 몇 시간 안에 정리합니다.",
        points: [
          "문단 단위 근거가 포함된 청구항 신규성 히트맵",
          "인용문헌에 기반한 거절이유 대응 초안",
          "문헌별 패밀리·소송 그래프",
        ],
      },
      {
        eyebrow: "R&D 전략팀을 위한 워크플로우",
        title: "기술이 어디로 이동하는지, 공백은 어디에 있는지 확인합니다.",
        points: [
          "클러스터별 출원 속도와 초기 신호 탐지",
          "경쟁사 포트폴리오 변화와 전략 이동 알림",
          "투자 검토에 바로 쓰는 기술 지형 브리핑",
        ],
      },
    ],
    cta: {
      title: "현재 화면은 제품 방향을 설명하는 랜딩 페이지입니다.",
      body:
        "회원가입, 검색 실행, 보고서 생성 같은 실제 동작 화면은 이후 단계에서 연결될 예정입니다. 지금은 정보 구조와 화면 방향을 우선 정리하고 있습니다.",
    },
    footer: {
      body: "IP팀, 변리사, R&D 전략가를 위한 AI 기반 특허 인텔리전스 플랫폼입니다.",
      links: ["기능", "워크스페이스", "활용 대상"],
      rights: "All rights reserved.",
      legal: ["개인정보", "이용약관"],
    },
  },
  en: {
    header: {
      nav: ["Capabilities", "Workspace", "Use Cases"],
      beta: "Beta",
    },
    hero: {
      badge: "AI-native patent intelligence — now in private beta",
      titleTop: "The strategic operating",
      titleBottom: "system for patent intelligence.",
      body:
        "PatentLens unifies semantic search, prior art analysis, and competitive landscape mapping into a single AI workspace — built for IP attorneys and R&D strategists who need evidence, not summaries.",
      note: "This landing page currently explains product direction and sample workflows only.",
      patents: "140M+ global patents indexed",
      offices: "EPO · USPTO · KIPO · JPO · WIPO",
    },
    trust: {
      slots: ["reference-1", "reference-2", "reference-3", "reference-4"],
    },
    metrics: [
      { value: "140M+", label: "Patents indexed", sub: "USPTO · EPO · WIPO · KIPO · JPO" },
      { value: "98.4%", label: "Semantic recall@10", sub: "Benchmarked vs. expert-curated set" },
      { value: "<1.2s", label: "Median search latency", sub: "Hybrid retrieval + reranking" },
      { value: "12 yrs", label: "Citation graph depth", sub: "Forward + backward propagation" },
    ],
    features: {
      eyebrow: "Platform capabilities",
      title: "Every analysis runs on explainable evidence.",
      body:
        "From infringement analysis to landscape strategy, each workflow is grounded in explainable evidence shaped by logical reasoning across the same corpus and graph.",
      items: [
        {
          title: "Semantic patent search",
          body: "Hybrid BM25 + vector retrieval with claim-level reranking. Search by natural language, claim text, or whole specification.",
        },
        {
          title: "Prior art & novelty analysis",
          body: "Claim-to-claim heatmaps, novelty risk scoring, and inventive step assessment — every signal traceable to source.",
        },
        {
          title: "Citation graph intelligence",
          body: "Navigate forward & backward citations, family relationships, and litigation links across global jurisdictions.",
        },
        {
          title: "Technology trend analysis",
          body: "Filing velocity, white-space mapping, and emerging-signal detection across IPC/CPC technology clusters.",
        },
        {
          title: "Competitor monitoring",
          body: "Track assignee portfolios, new filings, and strategic shifts with weekly executive briefings.",
        },
        {
          title: "Report builder & export",
          body: "Compose evidence-grade reports with chart blocks, claim diffs, and citations. One-click PDF & DOCX export.",
        },
        {
          title: "Explainable AI insights",
          body: "Every summary and comparison is tied back to explainable evidence across paragraphs, claims, and relationship structure.",
        },
        {
          title: "Cross-language patent reading",
          body: "Read Korean and English patents in one shared context, with core technical elements normalized into a consistent structure.",
        },
      ],
    },
    preview: {
      eyebrow: "Inside the workspace",
      title: "Evidence-first analysis, from query to brief.",
      body:
        "Search results, citation graphs, claim diffs, and trend charts share a single context — so every AI insight is anchored in the underlying document corpus.",
      bullets: [
        "Hybrid retrieval with claim-level reranking",
        "Risk scoring on novelty and inventive step",
        "Side-by-side claim comparison editor",
        "Export-ready briefs with verifiable citations",
      ],
      sampleLabel: "Sample search workspace",
      results: "5 of 1,284 results",
      reranked: "Reranked · v3.2",
      aiRelevance: "AI relevance",
      aiBody:
        "Top results converge on the conditional expert routing Technique. KR 10-2456789 EMPLOYS the same gating method that US 11,482,931 SOLVES, and ACHIEVES the inference-latency Effect cluster.",
      filingTrend: "Filing trend",
      riskDetected: "2 high-risk claims detected",
      summaryLabel: "Summary state",
    },
    knowledge: {
      eyebrow: "Underlying knowledge graph",
      title: "An ontology + reasoning layer, not just a search index.",
      body:
        "PatentLens is built on an OWL-modeled knowledge graph spanning Korean and US patents. Each document is decomposed into Problem · Solution · Technique · Effect elements, then connected through a layered, modular ontology and logical reasoning across IPC and KSIC classifications. That same structure helps interpret user type, so analysis can be shaped differently for patent attorneys and R&D teams without overcomplicating the interface.",
      stats: [
        { k: "Knowledge graph", v: "Neo4j · n10s exporter" },
        { k: "Semantic similarity", v: "bge-m3 embeddings · RELATED_TO kNN" },
        { k: "Classification + persona chain", v: "Patent → IPC → KSIC + persona-aware flow" },
        { k: "LLM extraction", v: "Problem · Solution · Technique · Effect" },
      ],
      entities: "Core entities",
      relations: "Relationship types",
    },
    personas: [
      {
        eyebrow: "For patent attorneys",
        title: "Build defensible prior-art positions in hours, not weeks.",
        points: [
          "Claim-to-claim novelty heatmaps with paragraph-level evidence",
          "Office-action response drafts grounded in cited references",
          "Family & litigation graph for every reference",
        ],
      },
      {
        eyebrow: "For R&D strategists",
        title: "See where technology is moving — and where the white-space lives.",
        points: [
          "Cluster-level filing velocity & emerging signal detection",
          "Competitor portfolio diffs and strategic shift alerts",
          "Investment-grade landscape briefings on demand",
        ],
      },
    ],
    cta: {
      title: "This page currently serves as a product-direction landing screen.",
      body:
        "Interactive flows such as sign-up, live search, and report generation will be connected in a later phase. For now, the page is focused on information structure and screen direction.",
    },
    footer: {
      body: "An AI-native patent intelligence platform for IP teams, attorneys, and R&D strategists.",
      links: ["Capabilities", "Workspace", "Use Cases"],
      rights: "All rights reserved.",
      legal: ["Privacy", "Terms"],
    },
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "ko";

    return window.localStorage.getItem("patentlens-language") === "en" ? "en" : "ko";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("patentlens-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
