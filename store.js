const STORE = {

    questions: [
        // 1    
        {
            questionType: "Verbal aptitude - Classification",
            questionExplanation: "Mastery of words is seen by many as having the possession of the ability to produce order out of chaos. Because of this, it is argued that the command of vocabulary is seen as a true measure of intelligence. The following exercises will test basic verbal aptitude. You are given a list of five words. Choose which of the five words is the odd one out.",
            question: 
            {
                text: "Choose which of the five words is the odd one out.",
                image: "",
            },
            choices: [
                {answerLetter: "(a)", answerChoice: "calm", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "quiet", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "relaxed", answerImage: ""},
                {answerLetter: "(d)", answerChoice: "serene", answerImage: ""},
                {answerLetter: "(e)", answerChoice: "unruffled", answerImage: ""},
            ],
            answer: {answerLetter: "(b)", answerChoice: "quiet", answerImage: ""},
            answerExplanation: "'Quiet' is the odd one out, as the others mean the same thing. Although, one being quiet does not always mean that one is calm, relaxed, serene, or unruffled. One could be extremely upset and annoyed but remain quiet.",
        },
        // 2
        {
            questionType: "Verbal aptitude - Classification",
            questionExplanation: "Mastery of words is seen by many as having the possession of the ability to produce order out of chaos. Because of this, it is argued that the command of vocabulary is seen as a true measure of intelligence. The following exercises will test basic verbal aptitude. You are given a list of five words. Choose which of the five words is the odd one out.",
            question:
            {
                text: "Choose which of the five words is the odd one out.",
                image: "",
            },
            choices: [
                {answerLetter: "(a)", answerChoice: "abode", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "dwelling", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "house", answerImage: ""},
                {answerLetter: "(d)", answerChoice: "residence", answerImage: ""},
                {answerLetter: "(e)", answerChoice: "street", answerImage: ""},
            ],
            answer: {answerLetter: "(e)", answerChoice: "street", answerImage: ""},
            answerExplanation: "'Street' is the odd one out, as the rest are places in which one can live. ‘Street’ is in a general term which may contain may houses, gardens, trees, and road surfaces. It is mostly used as a means to get from one place to another.",
        },
        // 3
        {
            questionType: "Numberical aptitude - Number sequence",
            questionExplanation: "Numerical tests are regarded as being culture-fair or culture-free. These questions will test one’s ability to deal with problems in a structured and analytical way. Identify a pattern that is occurring in the sequence. The numbers may be progressing, or they may be decreasing, and in some cases, they may be both progressing and decreasing within the sequence. Fill in the missing number(s) indicated by the question mark(s).",
            question:
            {
                text: "0, 1, 4, 9, 16, 25, 36, 49, ?",
                image: "",
            },
            choices: [
                {answerLetter: "(a)", answerChoice: "54", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "59", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "62", answerImage: ""},
                {answerLetter: "(d)", answerChoice: "64", answerImage: ""},
                {answerLetter: "(e)", answerChoice: "none of the above", answerImage: ""},
            ],
            answer: {answerLetter: "(d)", answerChoice: "64", answerImage: ""},
            answerExplanation: "Add 1, 3, 5, 7, etc."
        },
        // 4
        {
            questionType: "Numberical aptitude - Number sequence",
            questionExplanation: "Numerical tests are regarded as being culture-fair or culture-free. These questions will test one’s ability to deal with problems in a structured and analytical way. Identify a pattern that is occurring in the sequence. The numbers may be progressing, or they may be decreasing, and in some cases, they may be both progressing and decreasing within the sequence. Fill in the missing number(s) indicated by the question mark(s).",
            question:
            {
                text: "14, 16, 28, 32, 42, 48, 56, 64, ?, ?",
                image: "",
            },
            choices: [
                {answerLetter: "(a)", answerChoice: "74, 76", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "72, 78", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "70, 80", answerImage: ""},
                {answerLetter: "(d)", answerChoice: "72, 82", answerImage: ""},
                {answerLetter: "(e)", answerChoice: "none of the above", answerImage: ""},
            ],
            answer: {answerLetter: "(c)", answerChoice: "70, 80", answerImage: ""},
            answerExplanation: "There are two interwoven sequences, add 14 starting at 14 and add 16 starting at 16."
        },
        // 5
        {
            questionType: "Logical reasoning - Pure logic",
            questionExplanation: "Logic is defined as ‘the science of reasoning, proof, thinking, or inference’. In philosophy, logic is a science that deals with the principles of valid reasoning and argument. In this context, logic concerns only the reasoning process and not necessarily the end result. Therefore, incorrect conclusions can be reached by so-called ‘faulty’ means if the original assumptions are faulty. These questions just require you to think clearly and analytically. There is no knowledge of mathematics or vocabulary needed.",
            question:
            {
                text: "elk, mink, mouse, gibbon, panther. Which creature comes next? Is it:",
                image: "",
            },
            choices: [
                {answerLetter: "(a)", answerChoice: "squirrel", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "tortoise", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "tigress", answerImage: ""},
                {answerLetter: "(d)", answerChoice: "wildebeest", answerImage: ""},
                {answerLetter: "(e)", answerChoice: "platypus", answerImage: ""},
                {answerLetter: "(f)", answerChoice: "aardvark", answerImage: ""},
            ],
            answer: {answerLetter: "(b)", answerChoice: "tortoise", answerImage: ""},
            answerExplanation: "The name of each creature starts with the letter that comes two letters in the alphabet after the last letter of the previous creature. Also, the name of each creature has one more letter than the previous creature."
        },
        // 6
        {
            questionType: "Logical reasoning - Progressive matrices test",
            questionExplanation: "This section will test one’s ability to recognize patterns and designs, one’s ability to think logically but at the same time to explore with an open mind the various possibilities that might lead to a correct answer. A matrix is an array of squares in which one of the squares has been omitted, and where you must choose the correct missing square from a number of choices. Study the matrix to decide what pattern is occurring, either by looking across each line and down each column, looking at the array as a while or looking at the relationship between different squares within the array.",
            question:
                {
                    text: "Which is the missing section?<br>",
                    image: `<img src='images/questions-answers/q-06/question06.png' alt='A pattern and design. This question may be difficult for the visually impared.'>`,
                },
            choices: [
                {answerLetter: "(a)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/01answerA.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
                {answerLetter: "(b)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/02answerB.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
                {answerLetter: "(c)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/03answerC.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
                {answerLetter: "(d)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/04answerD.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
                {answerLetter: "(e)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/05answerE.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
                {answerLetter: "(f)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/06answerF.png' alt='A pattern and design. This question may be difficult for the visually impared.'>"},
            ],
            answer: {answerLetter: "(b)", answerChoice: "", answerImage: "<img src='images/questions-answers/q-06/answers/02answerB.png' alt='A pattern and design. This question may be difficult for the visually impared.'><br>"},
            answerExplanation: "Looking across and down, alternative circle combinations are repeated with the addition of an extra circle."
        },
        // 7
        {
            questionType: "Creativity - Lateral thinking",
            questionExplanation: "Lateral thinking is a systematic way of approaching creative thinking. It is a method of seeking to solve problems in unique and different ways, by looking at a problem from many angles rather than searching for a direct head-on solution. It involves the need to think outside the box and develop a degree of creative, innovative thinking, which seeks to change our natural and traditional perceptions, concepts, and ideas. Think laterally and creatively and look for solutions that may not seem apparent on the first inspection.",
            question:    
                {
                    text: "How many circles appear above?",
                    image: `<img src='images/questions-answers/q-07/question07.png' alt='A pattern and design. This question may be difficult for the visually impared.'>`
                },
            choices: [
                {answerLetter: "(a)", answerChoice: "11", answerImage: ""},
                {answerLetter: "(b)", answerChoice: "1", answerImage: ""},
                {answerLetter: "(c)", answerChoice: "0", answerImage: ""},
            ],
            answer: {answerLetter: "(b)", answerChoice: "1", answerImage: ""},
            answerExplanation: "There is only one complete circle, in the middle of the image. The rest are arches and incomplete circles."
        },
    ],
    currentQuestion: 0,
    score: 0,
    incorrect: 0
};

