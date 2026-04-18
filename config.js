/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이상원",
    father: "이경우",
    mother: "강석경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김예슬",
    father: "김형엽",
    mother: "김미균",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-09",
    time: "11:00",
    venue: "W스퀘어웨딩홀 ",
    hall: "더 가든홀 3층",
    address: "부산시 부산진구 신천대로 252 일성인포아파트 주상복합상가 3층",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1143897257",
      naver: "https://naver.me/5bVsWS2O"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "서로의 시간이 되어",
    content: "스무 살에 만나 서로의 시간이 된 우리가,\n올 8월 한 걸음을 더 내딛습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", bank: "OO은행", number: "000-00-000000" },
      { role: "어머니", bank: "OO은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "신부", bank: "OO은행", number: "00000-0000-00" },
      { role: "아버지", bank: "OO은행", number: "000000-00-000000" },
      { role: "어머니", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이상원 ♥ 김예슬 결혼합니다",
    description: "2026년 8월 9일, 소중한 분들을 초대합니다."
  }
};
