## PROJECT(Search LIst)

### 프레임워크
- **NEXT JS 13**

### 스타일링 라이브러리
- **Chakra UI**(**CSS-IN-JS** 방식이므로 **NEXT JS 13**가 추구하는 **SSR**과 맞지 않음 )

### API
- **Naver Search API**(Blog 검색 기록을 불러옴)

### 의도
- **NEXT JS 13**을 사용하면서 **SSR**의 개념과 **Naver Search API**를 사용하여 검색 내용을 무한 스크롤을 통해 구현 하는 웹페이지를 만들고 싶었음.

### 결과
- **NEXT JS 13**은 SSR을 주로 하는데 반해 스타일링을 할 때 **CSS-IN-JS** 방식의 스타일링 라이브러리인 **Chakra UI**를 사용하여 결국 SSR의 이점을 이용하지 못함. (**치명적**)
- **Naver Search API**를 활용하여 API가 제공하는 데이터를 대부분 불러오고 가공할 수 있었고, 데이터를 불러오며 무한 스크롤을 구현함.
