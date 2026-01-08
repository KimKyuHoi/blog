---
title: 'Next.js App Router에서 prefetchQuery와 Suspense로 데이터 스트리밍하기'
date: '2025-09-24'
description: 'Tanstack Query v5.40.0의 새로운 기능과 Suspense를 결합하여 사용자 경험을 극대화하는 데이터 스트리밍 전략을 소개합니다.'
tags: ['Next.js', 'Tanstack Query', 'Suspense', 'Frontend']
category: '개발'
featured: true
---

안녕하세요! 더핑크퐁컴퍼니에서 Software Engineer로 근무하고 있는 **앤디(Andy)** 입니다. 😆

최근 제가 작성한 기술 포스팅이 **더핑크퐁컴퍼니 공식 기술 블로그**에 실리게 되었습니다! 🎉

이번 글은 사내 카페 서비스 프로젝트를 Next.js App Router로 마이그레이션하면서, 어떻게 하면 사용자에게 더 매끄러운 데이터 로딩 경험을 제공할 수 있을지 깊게 고민하고 실험했던 과정을 기록한 글입니다.

기존의 **Waterfall**이나 **Parallel Prefetch** 방식이 가진 한계를 넘어서, **Tanstack Query v5.40.0**의 새로운 기능과 **React 18의 Suspense**를 결합해 마치 데이터를 스트리밍하듯 점진적으로 화면을 채워나가는 **'Streaming-like' UX**를 구현한 여정을 공유합니다.

### 🚀 이런 내용을 담고 있어요

- 기존 최적화 방식(Waterfall, Parallel)의 고질적인 문제점
- Tanstack Query v5.40.0에서 등장한 `await` 없는 `prefetchQuery`의 파괴력
- Suspense와 결합하여 FCP를 절반 이하로 단축시킨 실험 결과
- 단순한 성능 수치를 넘어 "사용자가 체감하는 속도"를 올리는 방법

폭포수 요청의 늪에서 벗어나, 데이터가 준비되는 대로 즉시 렌더링되는 마법 같은 경험! 아래 Medium 블로그에서 자세한 내용과 실험 코드를 확인해 보세요. 👇

---

### 🔗 전체 글 읽어보기

[Next.js App Router에서 prefetchQuery와 Suspense로 뚜루루뚜루 데이터 스트리밍하기](https://medium.com/pinkfong/next-js-app-router%EC%97%90%EC%84%9C-prefetchquery%EC%99%80-suspense%EB%A1%9C-%EC%9A%B0%EC%95%84%ED%95%98%EA%B2%8C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D%ED%95%98%EA%B8%B0-acb3d90cd5bc)
