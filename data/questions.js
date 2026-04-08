const tests = {
  depression: {
    id: 'depression',
    title: 'Bài kiểm tra Mức độ Trầm cảm',
    description: 'Khám phá cảm xúc và đánh giá nguy cơ trầm cảm của bạn trong thời gian gần đây.',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌧️',
    questions: [
      {
        question: 1,
        title: "Trong 2 tuần qua, bạn cảm thấy buồn bã hoặc chán nản ở mức nào?",
        A: "Không bao giờ",
        B: "Vài ngày",
        C: "Hơn một nửa số ngày",
        D: "Gần như mỗi ngày",
      },
      {
        question: 2,
        title: "Bạn có còn hứng thú với những việc từng thích không?",
        A: "Vẫn như bình thường",
        B: "Ít hơn một chút",
        C: "Giảm nhiều",
        D: "Mất hoàn toàn hứng thú",
      },
      {
        question: 3,
        title: "Giấc ngủ của bạn thế nào?",
        A: "Bình thường",
        B: "Khó ngủ / ngủ nhiều hơn một chút",
        C: "Rối loạn rõ rệt",
        D: "Rất khó ngủ hoặc ngủ quá nhiều mỗi ngày",
      },
      {
        question: 4,
        title: "Mức năng lượng của bạn?",
        A: "Đầy năng lượng",
        B: "Hơi mệt",
        C: "Thường xuyên mệt",
        D: "Kiệt sức gần như mỗi ngày",
      },
      {
        question: 5,
        title: "Bạn cảm thấy thế nào về bản thân?",
        A: "Tự tin",
        B: "Thỉnh thoảng tự ti",
        C: "Thường xuyên thấy mình vô dụng",
        D: "Cảm thấy mình vô giá trị hoặc thất bại",
      },
      {
        question: 6,
        title: "Khả năng tập trung của bạn?",
        A: "Tốt",
        B: "Giảm nhẹ",
        C: "Khó tập trung",
        D: "Gần như không thể tập trung",
      },
      {
        question: 7,
        title: "Bạn có cảm thấy chậm chạp hoặc bồn chồn bất thường không?",
        A: "Không",
        B: "Đôi lúc",
        C: "Khá thường xuyên",
        D: "Gần như mỗi ngày",
      },
      {
        question: 8,
        title: "Bạn có thay đổi về ăn uống không?",
        A: "Không",
        B: "Ăn ít hoặc nhiều hơn một chút",
        C: "Thay đổi rõ rệt",
        D: "Ăn rất ít hoặc ăn quá nhiều",
      },
      {
        question: 9,
        title: "Bạn có suy nghĩ tiêu cực (ví dụ: cuộc sống vô nghĩa)?",
        A: "Không",
        B: "Đôi lúc",
        C: "Khá thường xuyên",
        D: "Gần như mỗi ngày",
      },
      {
        question: 10,
        title: "Bạn có từng nghĩ đến việc làm hại bản thân?",
        A: "Không bao giờ",
        B: "Thoáng qua",
        C: "Có suy nghĩ rõ ràng",
        D: "Thường xuyên nghĩ đến",
      }
    ]
  },

  anxiety: {
    id: 'anxiety',
    title: 'Bài kiểm tra Mức độ Lo âu',
    description: 'Kiểm tra mức độ lo lắng, căng thẳng và sợ hãi của bạn.',
    color: 'from-amber-400 to-orange-500',
    icon: '⚡',
    questions: [
      {
        question: 1,
        title: "Bạn có thường xuyên cảm thấy căng thẳng, bồn chồn không?",
        A: "Không bao giờ",
        B: "Thỉnh thoảng",
        C: "Khá thường xuyên",
        D: "Hầu như lúc nào cũng vậy"
      },
      {
        question: 2,
        title: "Bạn có thể dừng hoặc kiểm soát việc lo lắng không?",
        A: "Rất dễ dàng",
        B: "Có thể nhưng hơi khó",
        C: "Rất khó kiểm soát",
        D: "Hoàn toàn không thể"
      },
      {
        question: 3,
        title: "Bạn có lo lắng quá mức về nhiều thứ khác nhau không?",
        A: "Không hề",
        B: "Chỉ vài điều lớn",
        C: "Rất nhiều chuyện nhỏ nhặt",
        D: "Lo lắng về tất cả mọi thứ"
      },
      {
        question: 4,
        title: "Bạn có gặp khó khăn khi thư giãn không?",
        A: "Không",
        B: "Đôi khi",
        C: "Thường xuyên",
        D: "Luôn luôn cảm thấy bứt rứt"
      },
      {
        question: 5,
        title: "Bạn có dễ trở nên bực tức và cáu gắt không?",
        A: "Hiếm khi",
        B: "Thỉnh thoảng",
        C: "Rất dễ nổi nóng",
        D: "Lúc nào cũng căng não"
      },
      {
        question: 6,
        title: "Bạn có cảm thấy tim đập nhanh hoặc hồi hộp không rõ lý do?",
        A: "Không",
        B: "Hiếm khi",
        C: "Thường xuyên",
        D: "Gần như mỗi ngày"
      },
      {
        question: 7,
        title: "Bạn có gặp khó khăn khi ngủ do suy nghĩ nhiều?",
        A: "Không",
        B: "Đôi khi",
        C: "Thường xuyên",
        D: "Hầu như mỗi ngày"
      },
      {
        question: 8,
        title: "Bạn có cảm thấy sợ hãi vô lý về một điều gì đó không?",
        A: "Không",
        B: "Ít khi",
        C: "Khá thường xuyên",
        D: "Rất thường xuyên"
      },
      {
        question: 9,
        title: "Bạn có tránh né các tình huống gây lo lắng không?",
        A: "Không",
        B: "Đôi khi",
        C: "Thường xuyên",
        D: "Luôn né tránh"
      },
      {
        question: 10,
        title: "Bạn có cảm thấy khó kiểm soát suy nghĩ của mình không?",
        A: "Không",
        B: "Đôi khi",
        C: "Khá thường xuyên",
        D: "Gần như không thể kiểm soát"
      }
    ]
  },

  stress: {
    id: 'stress',
    title: 'Bài kiểm tra Mức độ Stress',
    description: 'Đo lường áp lực cuộc sống, công việc và sức chịu đựng của bạn.',
    color: 'from-purple-500 to-pink-500',
    icon: '🌪️',
    questions: [
      {
        question: 1,
        title: "Bạn có cảm thấy bực tức vì những chuyện xảy ra ngoài ý muốn không?",
        A: "Không bao giờ",
        B: "Đôi khi",
        C: "Khá thường xuyên",
        D: "Rất thường xuyên"
      },
      {
        question: 2,
        title: "Bạn có cảm thấy mình không thể giải quyết được khối lượng công việc hiện tại?",
        A: "Luôn kiểm soát tốt",
        B: "Có thể làm được nhưng hơi mệt",
        C: "Cảm thấy quá tải",
        D: "Hoàn toàn suy sụp vì quá áp lực"
      },
      {
        question: 3,
        title: "Bạn có thường suy nghĩ mãi về những lỗi lầm nhỏ đã qua?",
        A: "Không hề",
        B: "Thỉnh thoảng nghĩ lại",
        C: "Day dứt rất lâu",
        D: "Ám ảnh không thể bỏ qua"
      },
      {
        question: 4,
        title: "Bạn có gặp tình trạng đau đầu/nhức mỏi cơ thường xuyên không do bệnh lý?",
        A: "Không bao giờ",
        B: "Vài lần một tháng",
        C: "Nhiều lần trong tuần",
        D: "Gần như mỗi ngày"
      },
      {
        question: 5,
        title: "Bạn có cảm thấy khó khăn để tìm thấy niềm vui trong ngày?",
        A: "Rất dễ tìm thấy niềm vui",
        B: "Đôi khi hơi trống rỗng",
        C: "Rất khó cảm nhận niềm vui",
        D: "Hoàn toàn vô cảm"
      },
      {
        question: 6,
        title: "Bạn có cảm thấy áp lực từ công việc/học tập không?",
        A: "Không",
        B: "Nhẹ",
        C: "Khá nhiều",
        D: "Rất nặng"
      },
      {
        question: 7,
        title: "Bạn có dễ mất bình tĩnh khi gặp vấn đề không?",
        A: "Không",
        B: "Đôi khi",
        C: "Thường xuyên",
        D: "Gần như luôn luôn"
      },
      {
        question: 8,
        title: "Bạn có cảm thấy mình không có thời gian nghỉ ngơi?",
        A: "Không",
        B: "Ít khi",
        C: "Khá thường xuyên",
        D: "Luôn luôn"
      },
      {
        question: 9,
        title: "Bạn có gặp khó khăn trong việc cân bằng cuộc sống?",
        A: "Không",
        B: "Đôi khi",
        C: "Thường xuyên",
        D: "Hoàn toàn mất cân bằng"
      },
      {
        question: 10,
        title: "Bạn có cảm thấy kiệt sức về tinh thần?",
        A: "Không",
        B: "Thỉnh thoảng",
        C: "Thường xuyên",
        D: "Luôn trong trạng thái kiệt quệ"
      }
    ]
  }
};

export default tests;