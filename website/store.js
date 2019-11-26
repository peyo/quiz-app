const STORE = {

    questions: [
        // 1    
        {
            questionType: "Verbal aptitue - Classification",
            questionExplanation: "Mastery of words is seen by many as having the possession of the ability to produce order out of chaos. Because of this, it is argued that the command of vocabulary is seen as a true measure of intelligence. The following exercises will test basic verbal aptitude. You are given a list of five words. Choose which of the five words is the odd one out.",
            question: 
            {
                text: "Choose which of the five words is the odd one out.",
                image: "https://placehold.it/300",
                alt: "There is no image here.",
            },
            choices: [
                {questionLetter: "a", answer: "calm"},
                {questionLetter: "b", answer: "quiet"},
                {questionLetter: "c", answer: "relaxed"},
                {questionLetter: "d", answer: "serene"},
                {questionLetter: "e", answer: "unruffled"}
            ],
            answer: {questionLetter: "b", answer: "quiet"},
            answerExplanation: "'Quiet' is the odd one out, as the others mean the same thing. Although, one being quiet does not always mean that one is calm, relaxed, serene, or unruffled. One could be extremely upset and annoyed but remain quiet.",
        },
        // 2
        {
            questionType: "Verbal aptitue - Classification",
            question:
            {
                text: "Choose which of the five words is the odd one out.",
                image: "https://placehold.it/300",
                alt: "There is no image for this question.",
            },
            choices: [
                {questionLetter: "a", answer: "abode"},
                {questionLetter: "b", answer: "dwelling"},
                {questionLetter: "c", answer: "house"},
                {questionLetter: "d", answer: "residence"},
                {questionLetter: "e", answer: "street"}
            ],
            answer: {questionLetter: "e", answer: "street"},
            answerExplanation: "'Street' is the odd one out, as the rest are places in which one can live. ‘Street’ is in a general term which may contain may houses, gardens, trees, and road surfaces. It is mostly used as a means to get from one place to another.",
        },
        // 3
        {
            questionType: "Numberical aptitude - Number sequence",
            questionExplanation: "Numerical tests are regarded as being culture-fair or culture-free. These questions will test one’s ability to deal with problems in a structured and analytical way. Identify a pattern that is occurring in the sequence. The numbers may be progressing, or they may be decreasing, and in some cases, they may be both progressing and decreasing within the sequence. Fill in the missing number(s) indicated by the question mark(s).",
            question:
            {
                text: "0, 1, 4, 9, 16, 25, 36, 49, ?",
                image: "https://placehold.it/300",
                alt: "There is no image for this question.",
            },
            choices: [
                {questionLetter: "a", answer: "54"},
                {questionLetter: "b", answer: "59"},
                {questionLetter: "c", answer: "62"},
                {questionLetter: "d", answer: "64"},
                {questionLetter: "e", answer: "none of the above"}
            ],
            answer: {questionLetter: "d", answer: "64"},
            answerExplanation: "Add 1, 3, 5, 7, etc."
        },
        // 4
        {
            questionType: "Numberical aptitude - Number sequence",
            question:
            {
                text: "14, 16, 28, 32, 42, 48, 56, 64, ?, ?",
                image: "https://placehold.it/300",
                alt: "There is no image for this question.",
            },
            choices: [
                {questionLetter: "a", answer: "74, 76"},
                {questionLetter: "b", answer: "72, 78"},
                {questionLetter: "c", answer: "70, 80"},
                {questionLetter: "d", answer: "72, 82"},
                {questionLetter: "e", answer: "none of the above"}
            ],
            answer: {questionLetter: "c", answer: "70, 80"},
            answerExplanation: "There are two interwoven sequences, add 14 starting at 14 and add 16 starting at 16."
        },
        // 5
        {
            questionType: "Logical reasoning - Pure logic",
            questionExplanation: "Logic is defined as ‘the science of reasoning, proof, thinking, or inference’. In philosophy, logic is a science that deals with the principles of valid reasoning and argument. In this context, logic concerns only the reasoning process and not necessarily the end result. Therefore, incorrect conclusions can be reached by so-called ‘faulty’ means if the original assumptions are faulty. These questions just require you to think clearly and analytically. There is no knowledge of mathematics or vocabulary needed.",
            question:
            {
                text: "elk, mink, mouse, gibbon, panther. Which creature comes next? Is it:",
                image: "https://placehold.it/300",
                alt: "There is no image for this question.",
            },
            choices: [
                {questionLetter: "a", answer: "squirrel"},
                {questionLetter: "b", answer: "tortoise"},
                {questionLetter: "c", answer: "tigress"},
                {questionLetter: "d", answer: "wildebeest"},
                {questionLetter: "e", answer: "platypus"},
                {questionLetter: "f", answer: "aardvark"},
            ],
            answer: {questionLetter: "b", answer: "tortoise"},
            answerExplanation: "The name of each creature starts with the letter that comes two letters in the alphabet after the last letter of the previous creature. Also, the name of each creature has one more letter than the previous creature."
        },
        // 6
        {
            questionType: "Logical reasoning - Progressive matrices test",
            questionExplanation: "This section will test one’s ability to recognize patterns and designs, one’s ability to think logically but at the same time to explore with an open mind the various possibilities that might lead to a correct answer. A matrix is an array of squares in which one of the squares has been omitted, and where you must choose the correct missing square from a number of choices. Study the matrix to decide what pattern is occurring, either by looking across each line and down each column, looking at the array as a while or looking at the relationship between different squares within the array.",
            question:
                {
                    text: "Which is the missing section?",
                    image: "images/questions-answers/q-06/question06.png",
                    alt: "A pattern and design. This question may be difficult for the visually impared."
                },
            choices: [
                {questionLetter: "a", answerImage: "images/questions-answers/q-06/answers/01answerA.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
                {questionLetter: "b", answerImage: "images/questions-answers/q-06/answers/02answerB.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
                {questionLetter: "c", answerImage: "images/questions-answers/q-06/answers/03answerC.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
                {questionLetter: "d", answerImage: "images/questions-answers/q-06/answers/03answerD.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
                {questionLetter: "e", answerImage: "images/questions-answers/q-06/answers/03answerE.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
                {questionLetter: "f", answerImage: "images/questions-answers/q-06/answers/03answerF.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
            ],
            answer: {questionLetter: "b", answerImage: "images/questions-answers/q-06/answers/02answerB.png", alt: "A piece that may fit into the pattern shown in the question. This question may be difficult for the visually impared."},
            answerExplanation: "Looking across and down, alternative circle combinations are repeated with the addition of an extra circle."
        },
        // 7
        {
            questionType: "Creativity - Lateral thinking",
            questionExplanation: "Lateral thinking is a systematic way of approaching creative thinking. It is a method of seeking to solve problems in unique and different ways, by looking at a problem from many angles rather than searching for a direct head-on solution. It involves the need to think outside the box and develop a degree of creative, innovative thinking, which seeks to change our natural and traditional perceptions, concepts, and ideas. Think laterally and creatively and look for solutions that may not seem apparent on the first inspection.",
            question:    
                {
                    text: "How many circles appear above?",
                    image: "images/questions-answers/q-07/question07.png",
                    alt: "A pattern and design. This question may be difficult for the visually impared."
                },
            choices: [
                {questionLetter: "a", answer: "11"},
                {questionLetter: "b", answer: "1"},
                {questionLetter: "c", answer: "0"},
            ],
            answer: {questionLetter: "b", answer: "1"},
            answerExplanation: "There is only one complete circle, in the middle of the image. The rest are arches and incomplete circles."
        },
    ],
    currentQuestion: 0,
    score: 0
  };