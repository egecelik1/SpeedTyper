const enWords = [
    "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "i", 
    "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", 
    "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", 
    "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", 
    "my", "than", "first", "water", "been", "called", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", 
    "over", "new", "sound", "take", "only", "little", "work", "know", "year", "live", "me", "back", "give", "most", "very", "after", "thing", "our", "just", "name", 
    "good", "sentence", "man", "think", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "mean", "old", "any", "same", "tell", "boy", 
    "follow", "came", "want", "show", "also", "around", "farm", "three", "small", "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", "such", 
    "because", "turn", "here", "why", "ask", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", 
    "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "america", "world", "high", 
    "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eye", "light", 
    "thought", "head", "under", "story", "saw", "left", "don't", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", 
    "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", 
    "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "later", "miss", "idea", "enough", "eat", "face", "watch", 
    "far", "indian", "real", "almost", "let", "above", "girl", "sometimes", "mountain", "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it's", "body", 
    "music", "color", "stand", "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete", "room", "knew", "since", "ever", "piece", "told", "usually", 
    "didn't", "friends", "easy", "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today", "during", "short", "better", "best", "however", "low", "hours", 
    "black", "products", "happened", "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space", "covered", "fast", "several", "hold", "himself", "toward", "five", 
    "step", "morning", "passed", "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slow", "money", "map", "farm", "pulled", "draw", "voice", "seen", "cold", 
    "cried", "plan", "notice", "south", "sing", "war", "ground", "fall", "king", "town", "i'll", "unit", "figure", "certain", "field", "travel", "wood", "fire", "upon", "done", 
    "english", "road", "halt", "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person", "became", "shown", "minutes", "strong", "verb", "stars", "front", 
    "feel", "fact", "inches", "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note", "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", 
    "green", "known", "island", "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran", "round", "boat", "game", "force", "brought", "understand", "warm", 
    "common", "bring", "explain", "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet", "government", "filled", "heat", "full", "hot", "check", "object", 
    "am", "rule", "among", "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special", "heavy", "fine", "pair", "circle", "include", "built", "can't"
];

const trWords = [
    "yapmak", "değil", "olmak", "kendi", "gelmek", "göre", "böyle", "sonra", "içinde", "demek", "başka", "önce", "yine", "onun", "yüzden", "çünkü", "nasıl", "hiçbir", "zaman", "şimdi", "büyük", "öyle", "insan", "gelen", "almak", "size", "yani", "olduğu", "dünya", "bunu", "çocuk", "bazı", "şekilde", "vermek", "bize", "durum", "uzun", "küçük", "burada", "yeni", "sadece", "senin", "çalışmak", "güzel", "yaşamak", "hayat", "tarafından", "önemli", "onlar", "doğru", "artık", "gelir", "başlamak", "ayrı", "geçmek", "kalmak", "başkan", "biraz", "bilgi", "karşı", "belki", "diğer", "kitap", "Türkiye", "devlet", "konu", "durmak", "gece", "genç", "anlamak", "görmek", "eski", "bakmak", "yazmak", "bilmek", "şöyle", "herkes", "çıkmak", "anne", "baba", "kadın", "adam", "saat", "dakika", "saniye", "birmanyalı", "birçok", "hala", "tekrar", "beklemek", "sevmek", "korkmak", "gitmek", "başarı", "başarılı", "mutlu", "farklı", "aynı", "açık", "kapalı", "hazır", "lazım", "gerek", "istemek", "söylemek", "konuşmak", "anlatmak", "dinlemek", "izlemek", "okumak", "öğrenmek", "inanmak", "düşünmek", "karar", "hayal", "fikir", "soru", "cevap", "sorun", "çözüm", "neden", "sonuç", "amaç", "hedef", "plan", "oyun", "spor", "müzik", "sanat", "film", "resim", "yemek", "ekmek", "kahve", "şeker", "meyve", "sebze", "sabah", "öğle", "akşam", "bugün", "yarın", "şimdi", "sonra", "erken", "hızlı", "yavaş", "sert", "yumuşak", "soğuk", "sıcak", "temiz", "kirli", "yaşlı", "zengin", "fakir", "pahalı", "ucuz", "ağır", "hafif", "geniş", "akıllı", "çalışkan", "tembel", "dürüst", "yalancı", "cesur", "korkak", "güçlü", "zayıf", "uzun", "kısa", "kalın", "ince", "derin", "parlak", "taze", "bayat", "burası", "şurası", "orası", "nerede", "ne zaman", "neden", "hangi", "başkası", "herkes", "kimse", "akıl", "yürek", "kalp", "beyin", "vücut", "kafa", "kulak", "burun", "ağız", "parmak", "tırnak", "boyun", "omuz", "sırt", "göğüs", "karın", "bilek", "deri", "kemik", "nefes", "ışık", "renk", "gölge", "rüzgar", "yağmur", "güneş", "yıldız", "gökyüzü", "bulut", "hava", "toprak", "deniz", "nehir", "orman", "dağ", "ada", "çiçek", "ağaç", "yaprak", "bahçe", "tarla", "sokak", "cadde", "meydan", "şehir", "ülke", "dünya", "mutfak", "banyo", "kapı", "pencere", "duvar", "çatı", "bahçe", "masa", "sandalye", "yatak", "dolap", "ayna", "halı", "perde", "lamba", "televizyon", "bilgisayar", "telefon", "kitap", "kalem", "kağıt", "defter", "çanta", "elbise", "ayakkabı", "gömlek", "pantolon", "ceket", "şapka", "gözlük", "saat", "para", "cüzdan", "anahtar", "araba", "otobüs", "tren", "uçak", "gemi", "bisiklet", "okul", "sınıf", "öğrenci", "öğretmen", "ders", "sınav", "üniversite", "hastane", "doktor", "ilaç", "eczane", "market", "dükkan", "banka", "ofis", "fabrika", "polis", "asker", "hakim", "avukat", "mühendis", "işçi", "memur", "esnaf", "sporcu", "yazar", "sanatçı", "müdür", "arkadaş", "komşu", "akraba", "misafir", "erkek", "bebek", "aile", "kardeş", "abla", "teyze", "hala", "amca", "dayı", "dede", "anneanne", "sevgi", "saygı", "güven", "korku", "heyecan", "öfke", "üzüntü", "sevinç", "merak", "umut", "rüya", "hayat", "ölüm", "barış", "savaş", "özgürlük", "adalet", "görev", "sorumluluk", "hata", "doğru", "yanlış", "gerçek", "yalan", "bilgi", "haber", "fikir", "karar", "seçim", "şans", "tehlike", "güvenlik", "yardım", "paylaşmak", "öğrenmek", "başarmak", "kazanmak", "kaybetmek", "denemek", "hazırlamak", "bitirmek", "başlamak", "devam etmek", "izlemek", "yürümek", "koşmak", "yüzmek", "uçmak", "zıplamak", "oturmak", "yatmak", "kalkmak", "uyumak", "uyanmak", "gülmek", "ağlamak", "bağırmak", "susmak", "taşımak", "kırmak", "tutmak", "atmak", "çekmek", "itmek", "açmak", "kapatmak", "aramak", "bulmak", "seçmek", "almak", "satmak", "ödemek", "harcamak", "kazanmak", "biriktirmek", "sormak", "istemek", "vermek", "getirmek", "götürmek", "koymak", "beklemek", "tanımak", "hatırlamak", "unutmak", "değişmek", "gelişmek", "büyümek", "azalmak", "artmak", "hissetmek", "yaşamak", "ölmek", "başlamak", "bitirmek", "denemek", "başarmak", "yanılmak", "düzeltmek", "saklamak", "göstermek", "izlemek", "dinlemek", "dokunmak", "koklamak", "tatmak", "ısınmak", "soğumak", "acıkmak", "susamak", "yorulmak", "dinlenmek", "eğlenmek", "üzülmek", "şaşırmak", "korkmak", "utanmak", "sevinmek", "kızmak", "sakinleşmek", "hazırlanmak", "toplanmak", "dağılmak", "paylaşmak", "ayrılmak", "buluşmak", "tanışmak", "konuşmak", "tartışmak", "anlaşmak"
];

const deWords = [
    "machen", "werden", "kommen", "gehen", "wissen", "sehen", "lassen", "stehen", "finden", "bleiben", "liegen", "heißt", "denken", "nehmen", "tun", "dürfen", "glauben", "halten", "nennen", "mögen", "zeigen", "führen", "sprechen", "bringen", "leben", "fahren", "meinen", "fragen", "kennen", "gelten", "stellen", "spielen", "arbeiten", "brauchen", "folgen", "lernen", "verstehen", "bekommen", "schreiben", "laufen", "erklären", "entscheiden", "besuchen", "gehören", "beginnen", "erzählen", "versuchen", "schauen", "helfen", "gewinnen", "verlieren", "bezahlen", "studieren", "reisen", "warten", "erinnern", "vergessen", "ändern", "entwickeln", "wachsen", "fühlen", "sterben", "beenden", "probieren", "verbessern", "zeigen", "berühren", "riechen", "schmecken", "erfahren", "freuen", "ärgern", "vorbereiten", "treffen", "diskutieren", "versprechen", "Mensch", "Welt", "Zeit", "Jahr", "Woche", "Tag", "Arbeit", "Hand", "Auge", "Kind", "Frau", "Mann", "Stadt", "Land", "Deutschland", "Frage", "Haus", "Auto", "Freund", "Eltern", "Mutter", "Vater", "Schule", "Student", "Lehrer", "Problem", "Leben", "Geschichte", "Gesicht", "Kopf", "Herz", "Körper", "Sonne", "Mond", "Sterne", "Himmel", "Wolke", "Luft", "Erde", "Wasser", "Meer", "Fluss", "Wald", "Baum", "Blume", "Garten", "Straße", "Platz", "Zukunft", "Hoffnung", "Träume", "Gedanke", "Meinung", "Wahrheit", "Fehler", "Erfolg", "Glück", "Liebe", "Frieden", "Freiheit", "Gerechtigkeit", "Aufgabe", "Gefahr", "Sicherheit", "Hilfe", "Antwort", "Lösung", "Grund", "Ziel", "Plan", "Musik", "Kunst", "Film", "Bild", "Essen", "Brot", "Kaffee", "Zucker", "Obst", "Gemüse", "Morgen", "Mittag", "Abend", "Nacht", "heute", "morgen", "gestern", "jetzt", "später", "früher", "schnell", "langsam", "stark", "schwach", "groß", "klein", "breit", "schmal", "kalt", "warm", "sauber", "schmutzig", "reich", "arm", "teuer", "billig", "schwer", "leicht", "intelligent", "fleißig", "ehrlich", "mutig", "tief", "frisch", "wichtig", "richtig", "falsch", "wirklich", "einfach", "schwierig", "bereit", "möglich", "gemeinsam", "vielleicht", "besonders", "überall", "nirgendwo", "manchmal", "jemand", "niemand", "alles", "nichts", "Küche", "Badezimmer", "Tür", "Fenster", "Wand", "Dach", "Tisch", "Stuhl", "Bett", "Schrank", "Spiegel", "Teppich", "Lampe", "Fernseher", "Computer", "Telefon", "Buch", "Stift", "Papier", "Tasche", "Kleidung", "Schuhe", "Hemd", "Hose", "Jacke", "Hut", "Brille", "Uhr", "Geld", "Schlüssel", "Bus", "Zug", "Flugzeug", "Schiff", "Fahrrad", "Klasse", "Prüfung", "Universität", "Krankenhaus", "Arzt", "Medizin", "Apotheke", "Markt", "Laden", "Bank", "Büro", "Fabrik", "Polizei", "Soldat", "Richter", "Anwalt", "Ingenieur", "Arbeiter", "Beamter", "Sportler", "Autor", "Künstler", "Manager", "Nachbar", "Verwandte", "Gast", "Baby", "Bruder", "Schwester", "Tante", "Onkel", "Opa", "Oma", "Ehefrau", "Tochter", "Sohn", "Gefühl", "Angst", "Wut", "Trauer", "Freude", "Neugier", "Umwelt", "Natur", "Technik", "Wissenschaft", "Kultur", "Gesellschaft", "Wirtschaft", "Politik", "Gesetz", "Recht", "Pflicht", "Urlaub", "Reise", "Koffer", "Hotel", "Restaurant", "Bahnhof", "Flughafen", "Kirche", "Museum", "Theater", "Konzert", "Sportplatz", "Waldrand", "Berggipfel", "Wüste", "Ozean", "Insel", "Stein", "Sand", "Wiese", "Frühling", "Sommer", "Herbst", "Winter", "Wetter", "Regen", "Schnee", "Wind", "Gewitter", "Hitze", "Kälte", "Licht", "Schatten", "Farbe", "Form", "Größe", "Gewicht", "Entfernung", "Geschwindigkeit", "Richtung", "Norden", "Süden", "Osten", "Westen", "unten", "oben", "vorne", "hinten", "links", "rechts", "zwischen", "neben", "gegenüber", "überhaupt", "plötzlich", "eigentlich", "gerade", "zuerst", "zuletzt", "endlich", "sogar", "lieber", "liebevoll", "höflich", "vorsichtig", "gefährlich", "lustig", "ernst", "traurig", "wütend", "müde", "hungrig", "durstig", "gesund", "krank"
];

const languages = { tr: trWords, de: deWords, en: enWords };
const titles = {
    tr: "The Most Popular 500 Turkish Words:",
    en: "The Most Popular 500 English Words:",
    de: "The Most Popular 500 German Words:"
};


let currentLanguage = "en";
let pool = []; 
let currentIndex = 0; 
let timeLeft = 60; 
let timerStarted = false; 
let ticker;


const display = document.getElementById("word-pool");
const entry = document.getElementById("word-input");
const restartBtn = document.getElementById("restart-btn");
const langSelect = document.getElementById("language-select");
const timerEl = document.getElementById("timer");


function shuffle(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


function drawPool(words) {
    display.innerHTML = "";
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.innerText = word;
        span.id = "word-" + index;
        display.appendChild(span);
    });
}


function highlightWord() {
    const currentSpan = document.getElementById("word-" + currentIndex);
    if (currentSpan) {
        currentSpan.classList.add("current-word");
        if (currentSpan.offsetTop > 0) {
            display.scrollTop = currentSpan.offsetTop;
        }
    }
}


function runClock() {
    ticker = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;

        if (timeLeft <= 10) {
            timerEl.classList.add("timer-critical");
        }

        if (timeLeft <= 0) {
            clearInterval(ticker);
            completeTest();
        }
    }, 1000);
}


function completeTest() {
    clearInterval(ticker); 
    entry.disabled = true; 
    
    const hits = document.querySelectorAll(".correct").length;
    
    
    const oldScore = document.getElementById("last-score").innerText;
    document.getElementById("last-result").innerText = oldScore;
    document.getElementById("last-score").innerText = hits + " WPM";
}


function clearAll() {
    clearInterval(ticker);
    timerStarted = false;
    timeLeft = 60;
    
    timerEl.innerText = "60";
    timerEl.classList.remove("timer-critical");
    
    entry.value = "";
    entry.disabled = false;
    
    currentIndex = 0;
    pool = shuffle(languages[currentLanguage]); 
    drawPool(pool);
    highlightWord();
    display.scrollTop = 0;
}


entry.addEventListener("input", () => {
 
    if (!timerStarted && entry.value.trim().length > 0) {
        runClock();
        timerStarted = true;
    }

    const value = entry.value; 
    const targetWord = pool[currentIndex]; 
    const currentSpan = document.getElementById("word-" + currentIndex);

    if (!currentSpan) return;

    
    if (!targetWord.startsWith(value.trim())) {
        currentSpan.classList.add("wrong");
    } else {
        currentSpan.classList.remove("wrong");
    }

   
    if (value.endsWith(" ")) {
        const typedWord = value.trim();
      
        if (typedWord === targetWord) {
            currentSpan.classList.add("correct");
            currentSpan.classList.remove("wrong");
        } else {
            currentSpan.classList.add("wrong");
        }

        currentSpan.classList.remove("current-word");
        currentIndex++;
        entry.value = "";
        highlightWord();
    }
});


langSelect.addEventListener("change", () => {
    currentLanguage = langSelect.value;
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.innerText = titles[currentLanguage];
    }
    clearAll();
});


restartBtn.addEventListener("click", clearAll);


function initApp() {
    pool = shuffle(languages[currentLanguage]); 
    drawPool(pool);
    highlightWord();
}

initApp(); 