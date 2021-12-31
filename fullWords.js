const fullWords = [
    {
        "text": "When",
        "initTag": "WRB",
        "normal": "when",
        "lexTags": [
            "WRB",
            "IN"
        ],
        "index": 0,
        "tag": {}
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 1,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "say",
        "initTag": "VBP",
        "normal": "say",
        "lexTags": [
            "VBP",
            "FW",
            "NN",
            "NNP",
            "VB",
            "UH"
        ],
        "index": 2,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 3,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "I’m",
        "initTag": "NN",
        "normal": "im",
        "index": 4,
        "tag": {}
    },
    {
        "text": "an",
        "initTag": "DT",
        "normal": "an",
        "lexTags": [
            "DT",
            "CC",
            "JJ",
            "NNP",
            ","
        ],
        "index": 5,
        "tag": {
            "Det": true,
            "Article": true
        },
        "count": 1,
        "initial": 2
    },
    {
        "text": "experimental",
        "initTag": "JJ",
        "normal": "experimental",
        "lexTags": [
            "JJ"
        ],
        "index": 6,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 7,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "poet,",
        "initTag": "NN",
        "normal": "poet",
        "lexTags": [
            "NN"
        ],
        "index": 8,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "what",
        "initTag": "WP",
        "normal": "what",
        "lexTags": [
            "WP",
            "WDT",
            "WP|IN"
        ],
        "index": 9,
        "tag": {}
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 10,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "mean",
        "initTag": "VB",
        "normal": "mean",
        "lexTags": [
            "VB",
            "VBP",
            "JJ",
            "NN"
        ],
        "index": 11,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 12,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 13,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 14,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "write",
        "initTag": "VB",
        "normal": "write",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 15,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 16,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "programs",
        "initTag": "NNS",
        "normal": "programs",
        "lexTags": [
            "NNS"
        ],
        "index": 17,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 18,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "write",
        "initTag": "VB",
        "normal": "write",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 19,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "poems.",
        "initTag": "NNS",
        "normal": "poems",
        "lexTags": [
            "NNS"
        ],
        "index": 20,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "Part",
        "initTag": "NN",
        "normal": "part",
        "lexTags": [
            "NN",
            "JJ",
            "RB",
            "VB"
        ],
        "index": 21,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "of",
        "initTag": "IN",
        "normal": "of",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "NNP"
        ],
        "index": 22,
        "tag": {}
    },
    {
        "text": "what",
        "initTag": "WP",
        "normal": "what",
        "lexTags": [
            "WP",
            "WDT",
            "WP|IN"
        ],
        "index": 23,
        "tag": {}
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 24,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "want",
        "initTag": "VBP",
        "normal": "want",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 25,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "to",
        "initTag": "TO",
        "normal": "to",
        "lexTags": [
            "TO",
            "RB"
        ],
        "index": 26,
        "tag": {}
    },
    {
        "text": "do",
        "initTag": "VBP",
        "normal": "do",
        "lexTags": [
            "VBP",
            "FW",
            "NN",
            "VB",
            "NNS",
            "VBZ"
        ],
        "index": 27,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "in",
        "initTag": "IN",
        "normal": "in",
        "lexTags": [
            "IN",
            "FW",
            "NN",
            "RB",
            "RP",
            "IN|RP",
            "NNP",
            "RP|IN",
            "RBR",
            "VBD"
        ],
        "index": 28,
        "tag": {}
    },
    {
        "text": "this",
        "initTag": "DT",
        "normal": "this",
        "lexTags": [
            "DT",
            "RB",
            "PDT"
        ],
        "index": 29,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "talk",
        "initTag": "NN",
        "normal": "talk",
        "lexTags": [
            "VB",
            "VBP",
            "NN"
        ],
        "index": 30,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 31,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "offer",
        "initTag": "NN",
        "normal": "offer",
        "lexTags": [
            "NN",
            "VB",
            "VBP"
        ],
        "index": 32,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "a",
        "initTag": "DT",
        "normal": "a",
        "lexTags": [
            "DT",
            "VB",
            ",",
            "VBN",
            "NNP",
            "FW",
            "JJ",
            "LS",
            "NN"
        ],
        "index": 33,
        "tag": {
            "Det": true,
            "Article": true
        },
        "count": 1,
        "initial": 1
    },
    {
        "text": "new",
        "initTag": "JJ",
        "normal": "new",
        "lexTags": [
            "JJ"
        ],
        "index": 34,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "framework",
        "initTag": "NN",
        "normal": "framework",
        "lexTags": [
            "NN"
        ],
        "index": 35,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "for",
        "initTag": "IN",
        "normal": "for",
        "lexTags": [
            "IN",
            "NNP",
            "CC",
            "JJ",
            "RB",
            "RP"
        ],
        "index": 36,
        "tag": {}
    },
    {
        "text": "thinking",
        "initTag": "VBG",
        "normal": "thinking",
        "lexTags": [
            "VBG",
            "VBG|NN",
            "JJ",
            "NN"
        ],
        "index": 37,
        "tag": {
            "Gerund": true
        }
    },
    {
        "text": "about",
        "initTag": "IN",
        "normal": "about",
        "lexTags": [
            "IN",
            "JJ",
            "RB",
            "RP",
            "RBR",
            "IN|RB"
        ],
        "index": 38,
        "tag": {}
    },
    {
        "text": "what",
        "initTag": "WP",
        "normal": "what",
        "lexTags": [
            "WP",
            "WDT",
            "WP|IN"
        ],
        "index": 39,
        "tag": {}
    },
    {
        "text": "it",
        "initTag": "PRP",
        "normal": "it",
        "lexTags": [
            "PRP"
        ],
        "index": 40,
        "tag": {
            "SubjPrn": true,
            "ObjPrn": true
        },
        "count": 1
    },
    {
        "text": "means",
        "initTag": "VBZ",
        "normal": "means",
        "lexTags": [
            "VBZ",
            "NNS",
            "NN"
        ],
        "index": 41,
        "tag": {
            "Verb": true
        },
        "count": 1
    },
    {
        "text": "to",
        "initTag": "TO",
        "normal": "to",
        "lexTags": [
            "TO",
            "RB"
        ],
        "index": 42,
        "tag": {}
    },
    {
        "text": "write",
        "initTag": "VB",
        "normal": "write",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 43,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 44,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "programs",
        "initTag": "NNS",
        "normal": "programs",
        "lexTags": [
            "NNS"
        ],
        "index": 45,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 46,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "write",
        "initTag": "VB",
        "normal": "write",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 47,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "poems.",
        "initTag": "NNS",
        "normal": "poems",
        "lexTags": [
            "NNS"
        ],
        "index": 48,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "Because",
        "initTag": "IN",
        "normal": "because",
        "lexTags": [
            "IN",
            "RB"
        ],
        "index": 49,
        "tag": {}
    },
    {
        "text": "usually",
        "initTag": "RB",
        "normal": "usually",
        "lexTags": [
            "RB"
        ],
        "index": 50,
        "tag": {}
    },
    {
        "text": "when",
        "initTag": "WRB",
        "normal": "when",
        "lexTags": [
            "WRB",
            "IN"
        ],
        "index": 51,
        "tag": {}
    },
    {
        "text": "we",
        "initTag": "PRP",
        "normal": "we",
        "lexTags": [
            "PRP",
            "VBP"
        ],
        "index": 52,
        "tag": {
            "SubjPrn": true
        },
        "count": 2
    },
    {
        "text": "think",
        "initTag": "VBP",
        "normal": "think",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 53,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "about",
        "initTag": "IN",
        "normal": "about",
        "lexTags": [
            "IN",
            "JJ",
            "RB",
            "RP",
            "RBR",
            "IN|RB"
        ],
        "index": 54,
        "tag": {}
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 55,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "generated",
        "initTag": "VBN",
        "normal": "generated",
        "lexTags": [
            "VBN",
            "VBD",
            "VBG"
        ],
        "index": 56,
        "tag": {
            "PastParticiple": true
        }
    },
    {
        "text": "poetry,",
        "initTag": "NN",
        "normal": "poetry",
        "lexTags": [
            "NN"
        ],
        "index": 57,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "we",
        "initTag": "PRP",
        "normal": "we",
        "lexTags": [
            "PRP",
            "VBP"
        ],
        "index": 58,
        "tag": {
            "SubjPrn": true
        },
        "count": 2
    },
    {
        "text": "think",
        "initTag": "VBP",
        "normal": "think",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 59,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "of",
        "initTag": "IN",
        "normal": "of",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "NNP"
        ],
        "index": 60,
        "tag": {}
    },
    {
        "text": "articles",
        "initTag": "NNS",
        "normal": "articles",
        "lexTags": [
            "NNS"
        ],
        "index": 61,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "like",
        "initTag": "IN",
        "normal": "like",
        "lexTags": [
            "IN",
            "JJ",
            "NN",
            "VB",
            "VBP"
        ],
        "index": 62,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "this",
        "initTag": "DT",
        "normal": "this",
        "lexTags": [
            "DT",
            "RB",
            "PDT"
        ],
        "index": 63,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "where",
        "initTag": "WRB",
        "normal": "where",
        "lexTags": [
            "WRB"
        ],
        "index": 64,
        "tag": {}
    },
    {
        "text": "any",
        "initTag": "DT",
        "normal": "any",
        "lexTags": [
            "DT",
            "RB"
        ],
        "index": 65,
        "tag": {}
    },
    {
        "text": "instance",
        "initTag": "NN",
        "normal": "instance",
        "lexTags": [
            "NN"
        ],
        "index": 66,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "of",
        "initTag": "IN",
        "normal": "of",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "NNP"
        ],
        "index": 67,
        "tag": {}
    },
    {
        "text": "some",
        "initTag": "DT",
        "normal": "some",
        "lexTags": [
            "DT",
            "NN",
            "RB"
        ],
        "index": 68,
        "tag": {
            "Det": true
        },
        "count": 2
    },
    {
        "text": "human",
        "initTag": "JJ",
        "normal": "human",
        "lexTags": [
            "JJ",
            "NN"
        ],
        "index": 69,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "task",
        "initTag": "NN",
        "normal": "task",
        "lexTags": [
            "NN",
            "VB"
        ],
        "index": 70,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "being",
        "initTag": "VBG",
        "normal": "being",
        "lexTags": [
            "VBG",
            "JJ",
            "NN",
            "VBG|JJ"
        ],
        "index": 71,
        "tag": {
            "Gerund": true
        }
    },
    {
        "text": "automated",
        "initTag": "VBN",
        "normal": "automated",
        "lexTags": [
            "VBN",
            "VBN|JJ",
            "JJ",
            "VBD"
        ],
        "index": 72,
        "tag": {
            "PastParticiple": true
        }
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 73,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "met",
        "initTag": "VBD",
        "normal": "met",
        "lexTags": [
            "VBD",
            "VBN"
        ],
        "index": 74,
        "tag": {
            "Verb": true,
            "PastTense": true
        }
    },
    {
        "text": "by",
        "initTag": "IN",
        "normal": "by",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "RB|RP"
        ],
        "index": 75,
        "tag": {}
    },
    {
        "text": "some",
        "initTag": "DT",
        "normal": "some",
        "lexTags": [
            "DT",
            "NN",
            "RB"
        ],
        "index": 76,
        "tag": {
            "Det": true
        },
        "count": 2
    },
    {
        "text": "story",
        "initTag": "NN",
        "normal": "story",
        "lexTags": [
            "NN"
        ],
        "index": 77,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "that’s",
        "initTag": "NNS",
        "normal": "thats",
        "index": 78,
        "tag": {}
    },
    {
        "text": "like,",
        "initTag": "NN",
        "normal": "like",
        "lexTags": [
            "IN",
            "JJ",
            "NN",
            "VB",
            "VBP"
        ],
        "index": 79,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "“I",
        "initTag": "NN",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 80,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "welcome",
        "initTag": "JJ",
        "normal": "welcome",
        "lexTags": [
            "JJ",
            "NN",
            "VB",
            "VBP"
        ],
        "index": 81,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "our",
        "initTag": "PRP$",
        "normal": "our",
        "lexTags": [
            "PRP$"
        ],
        "index": 82,
        "tag": {}
    },
    {
        "text": "robotic",
        "initTag": "JJ",
        "normal": "robotic",
        "lexTags": [
            "JJ"
        ],
        "index": 83,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "X",
        "initTag": "NN",
        "normal": "x",
        "lexTags": [
            "NN"
        ],
        "index": 84,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "overlords”",
        "initTag": "NN",
        "normal": "overlords",
        "index": 85,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "where",
        "initTag": "WRB",
        "normal": "where",
        "lexTags": [
            "WRB"
        ],
        "index": 86,
        "tag": {}
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 87,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "replace",
        "initTag": "VB",
        "normal": "replace",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 88,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "X",
        "initTag": "NN",
        "normal": "x",
        "lexTags": [
            "NN"
        ],
        "index": 89,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "with",
        "initTag": "IN",
        "normal": "with",
        "lexTags": [
            "IN",
            "JJ",
            "RB",
            "RP"
        ],
        "index": 90,
        "tag": {}
    },
    {
        "text": "whatever",
        "initTag": "WDT",
        "normal": "whatever",
        "lexTags": [
            "WDT",
            "RB",
            "WP"
        ],
        "index": 91,
        "tag": {}
    },
    {
        "text": "task",
        "initTag": "NN",
        "normal": "task",
        "lexTags": [
            "NN",
            "VB"
        ],
        "index": 92,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 93,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "being",
        "initTag": "VBG",
        "normal": "being",
        "lexTags": [
            "VBG",
            "JJ",
            "NN",
            "VBG|JJ"
        ],
        "index": 94,
        "tag": {
            "Gerund": true
        }
    },
    {
        "text": "automated",
        "initTag": "VBN",
        "normal": "automated",
        "lexTags": [
            "VBN",
            "VBN|JJ",
            "JJ",
            "VBD"
        ],
        "index": 95,
        "tag": {
            "PastParticiple": true
        }
    },
    {
        "text": "by",
        "initTag": "IN",
        "normal": "by",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "RB|RP"
        ],
        "index": 96,
        "tag": {}
    },
    {
        "text": "a",
        "initTag": "DT",
        "normal": "a",
        "lexTags": [
            "DT",
            "VB",
            ",",
            "VBN",
            "NNP",
            "FW",
            "JJ",
            "LS",
            "NN"
        ],
        "index": 97,
        "tag": {
            "Det": true,
            "Article": true
        },
        "count": 1,
        "initial": 1
    },
    {
        "text": "computer.",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 98,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "Most",
        "initTag": "JJS",
        "normal": "most",
        "lexTags": [
            "RBS",
            "JJ",
            "NN",
            "RB",
            "RBS|JJS",
            "JJS"
        ],
        "index": 99,
        "tag": {
            "Det": true
        },
        "count": 2
    },
    {
        "text": "people",
        "initTag": "NNS",
        "normal": "people",
        "lexTags": [
            "NNS",
            "NN"
        ],
        "index": 100,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "when",
        "initTag": "WRB",
        "normal": "when",
        "lexTags": [
            "WRB",
            "IN"
        ],
        "index": 101,
        "tag": {}
    },
    {
        "text": "they",
        "initTag": "PRP",
        "normal": "they",
        "lexTags": [
            "PRP"
        ],
        "index": 102,
        "tag": {
            "SubjPrn": true
        },
        "count": 2
    },
    {
        "text": "think",
        "initTag": "VBP",
        "normal": "think",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 103,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "of",
        "initTag": "IN",
        "normal": "of",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "NNP"
        ],
        "index": 104,
        "tag": {}
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 105,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "poetry",
        "initTag": "NN",
        "normal": "poetry",
        "lexTags": [
            "NN"
        ],
        "index": 106,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "think",
        "initTag": "VBP",
        "normal": "think",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 107,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 108,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "the",
        "initTag": "DT",
        "normal": "the",
        "lexTags": [
            "DT",
            "VBD",
            "VBP",
            "NN|DT",
            "IN",
            "JJ",
            "NN",
            "NNP",
            "PDT"
        ],
        "index": 109,
        "tag": {
            "Det": true,
            "Article": true
        }
    },
    {
        "text": "task",
        "initTag": "NN",
        "normal": "task",
        "lexTags": [
            "NN",
            "VB"
        ],
        "index": 110,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "of",
        "initTag": "IN",
        "normal": "of",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "NNP"
        ],
        "index": 111,
        "tag": {}
    },
    {
        "text": "the",
        "initTag": "DT",
        "normal": "the",
        "lexTags": [
            "DT",
            "VBD",
            "VBP",
            "NN|DT",
            "IN",
            "JJ",
            "NN",
            "NNP",
            "PDT"
        ],
        "index": 112,
        "tag": {
            "Det": true,
            "Article": true
        }
    },
    {
        "text": "computer",
        "initTag": "NN",
        "normal": "computer",
        "lexTags": [
            "NN"
        ],
        "index": 113,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "poet",
        "initTag": "NN",
        "normal": "poet",
        "lexTags": [
            "NN"
        ],
        "index": 114,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 115,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "to",
        "initTag": "TO",
        "normal": "to",
        "lexTags": [
            "TO",
            "RB"
        ],
        "index": 116,
        "tag": {}
    },
    {
        "text": "recreate",
        "initTag": "VB",
        "normal": "recreate",
        "lexTags": [
            "VB",
            "VBP"
        ],
        "index": 117,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "with",
        "initTag": "IN",
        "normal": "with",
        "lexTags": [
            "IN",
            "JJ",
            "RB",
            "RP"
        ],
        "index": 118,
        "tag": {}
    },
    {
        "text": "as",
        "initTag": "IN",
        "normal": "as",
        "lexTags": [
            "IN",
            "NNP",
            "JJ",
            "RB"
        ],
        "index": 119,
        "tag": {}
    },
    {
        "text": "much",
        "initTag": "JJ",
        "normal": "much",
        "lexTags": [
            "JJ",
            "DT",
            "NN",
            "RB",
            "RB|JJ"
        ],
        "index": 120,
        "tag": {}
    },
    {
        "text": "fidelity",
        "initTag": "NN",
        "normal": "fidelity",
        "lexTags": [
            "NN"
        ],
        "index": 121,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "as",
        "initTag": "IN",
        "normal": "as",
        "lexTags": [
            "IN",
            "NNP",
            "JJ",
            "RB"
        ],
        "index": 122,
        "tag": {}
    },
    {
        "text": "possible",
        "initTag": "JJ",
        "normal": "possible",
        "lexTags": [
            "JJ",
            "RB"
        ],
        "index": 123,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "poetry",
        "initTag": "NN",
        "normal": "poetry",
        "lexTags": [
            "NN"
        ],
        "index": 124,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 125,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "is",
        "initTag": "VBZ",
        "normal": "is",
        "lexTags": [
            "VBZ",
            "RB",
            "NNS",
            "VBP"
        ],
        "index": 126,
        "tag": {
            "Copula": true
        },
        "count": 1
    },
    {
        "text": "written",
        "initTag": "VBN",
        "normal": "written",
        "lexTags": [
            "VBN",
            "JJ"
        ],
        "index": 127,
        "tag": {
            "PastParticiple": true
        }
    },
    {
        "text": "by",
        "initTag": "IN",
        "normal": "by",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "RB|RP"
        ],
        "index": 128,
        "tag": {}
    },
    {
        "text": "humans.",
        "initTag": "NNS",
        "normal": "humans",
        "lexTags": [
            "NNS"
        ],
        "index": 129,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 130,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "have",
        "initTag": "VBP",
        "normal": "have",
        "lexTags": [
            "VBP",
            "JJ",
            "NN",
            "VB",
            "VBN"
        ],
        "index": 131,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "no",
        "initTag": "DT",
        "normal": "no",
        "lexTags": [
            "DT",
            "JJ",
            "NN",
            "RB",
            "UH"
        ],
        "index": 132,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "interest",
        "initTag": "NN",
        "normal": "interest",
        "lexTags": [
            "NN",
            "VBP",
            "VB"
        ],
        "index": 133,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "in",
        "initTag": "IN",
        "normal": "in",
        "lexTags": [
            "IN",
            "FW",
            "NN",
            "RB",
            "RP",
            "IN|RP",
            "NNP",
            "RP|IN",
            "RBR",
            "VBD"
        ],
        "index": 134,
        "tag": {}
    },
    {
        "text": "making",
        "initTag": "VBG",
        "normal": "making",
        "lexTags": [
            "VBG",
            "NN"
        ],
        "index": 135,
        "tag": {
            "Gerund": true
        }
    },
    {
        "text": "poetry",
        "initTag": "NN",
        "normal": "poetry",
        "lexTags": [
            "NN"
        ],
        "index": 136,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 137,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "looks",
        "initTag": "VBZ",
        "normal": "looks",
        "lexTags": [
            "VBZ",
            "NNS",
            "NN"
        ],
        "index": 138,
        "tag": {
            "Verb": true
        },
        "count": 1
    },
    {
        "text": "like",
        "initTag": "IN",
        "normal": "like",
        "lexTags": [
            "IN",
            "JJ",
            "NN",
            "VB",
            "VBP"
        ],
        "index": 139,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "it",
        "initTag": "PRP",
        "normal": "it",
        "lexTags": [
            "PRP"
        ],
        "index": 140,
        "tag": {
            "SubjPrn": true,
            "ObjPrn": true
        },
        "count": 1
    },
    {
        "text": "was",
        "initTag": "VBD",
        "normal": "was",
        "lexTags": [
            "VBD",
            ":"
        ],
        "index": 141,
        "tag": {
            "Copula": true
        },
        "count": 1,
        "compatibleWithI": true
    },
    {
        "text": "written",
        "initTag": "VBN",
        "normal": "written",
        "lexTags": [
            "VBN",
            "JJ"
        ],
        "index": 142,
        "tag": {
            "PastParticiple": true
        }
    },
    {
        "text": "by",
        "initTag": "IN",
        "normal": "by",
        "lexTags": [
            "IN",
            "RB",
            "RP",
            "RB|RP"
        ],
        "index": 143,
        "tag": {}
    },
    {
        "text": "humans.",
        "initTag": "NNS",
        "normal": "humans",
        "lexTags": [
            "NNS"
        ],
        "index": 144,
        "tag": {
            "Noun": true,
            "Plural": true
        },
        "count": 2
    },
    {
        "text": "I",
        "initTag": "PRP",
        "normal": "i",
        "lexTags": [
            "PRP"
        ],
        "index": 145,
        "tag": {
            "SubjPrn": true
        },
        "count": 3
    },
    {
        "text": "think",
        "initTag": "VBP",
        "normal": "think",
        "lexTags": [
            "VBP",
            "VB",
            "NN"
        ],
        "index": 146,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 147,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "that’s",
        "initTag": "NNS",
        "normal": "thats",
        "index": 148,
        "tag": {}
    },
    {
        "text": "a",
        "initTag": "DT",
        "normal": "a",
        "lexTags": [
            "DT",
            "VB",
            ",",
            "VBN",
            "NNP",
            "FW",
            "JJ",
            "LS",
            "NN"
        ],
        "index": 149,
        "tag": {
            "Det": true,
            "Article": true
        },
        "count": 1,
        "initial": 1
    },
    {
        "text": "plainly",
        "initTag": "RB",
        "normal": "plainly",
        "lexTags": [
            "RB"
        ],
        "index": 150,
        "tag": {}
    },
    {
        "text": "boring",
        "initTag": "JJ",
        "normal": "boring",
        "lexTags": [
            "JJ",
            "VBG",
            "NN"
        ],
        "index": 151,
        "tag": {
            "Adj": true
        }
    },
    {
        "text": "task",
        "initTag": "NN",
        "normal": "task",
        "lexTags": [
            "NN",
            "VB"
        ],
        "index": 152,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "that",
        "initTag": "IN",
        "normal": "that",
        "lexTags": [
            "IN",
            "DT",
            "NN",
            "RB",
            "RP",
            "UH",
            "WP",
            "VBP",
            "WDT"
        ],
        "index": 153,
        "tag": {
            "Det": true
        },
        "count": 1
    },
    {
        "text": "nobody",
        "initTag": "NN",
        "normal": "nobody",
        "lexTags": [
            "NN"
        ],
        "index": 154,
        "tag": {
            "Noun": true
        },
        "count": 1
    },
    {
        "text": "should",
        "initTag": "MD",
        "normal": "should",
        "lexTags": [
            "MD"
        ],
        "index": 155,
        "tag": {
            "Modal": true
        }
    },
    {
        "text": "try",
        "initTag": "VB",
        "normal": "try",
        "lexTags": [
            "VB",
            "VBP",
            "NN"
        ],
        "index": 156,
        "tag": {
            "Verb": true,
            "Infinitive": true
        },
        "count": 2
    },
    {
        "text": "to",
        "initTag": "TO",
        "normal": "to",
        "lexTags": [
            "TO",
            "RB"
        ],
        "index": 157,
        "tag": {}
    },
    {
        "text": "attempt.",
        "initTag": "NN",
        "normal": "attempt",
        "lexTags": [
            "NN",
            "VBP",
            "VB"
        ],
        "index": 158,
        "tag": {
            "Noun": true
        },
        "count": 1
    }
];
