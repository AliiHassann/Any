arr = [
    { ayaah: "﴿ٱلَّذِینَ إِذَاۤ أَصَـٰبَتۡهُم مُّصِیبَةࣱ قَالُوۤا۟ إِنَّا لِلَّهِ وَإِنَّاۤ إِلَیۡهِ رَ ٰ⁠جِعُونَ﴾", sora: "[156 البقرة]" },
    { ayaah: "(رَّبِّ ٱغۡفِرۡ لِی وَلِوَ ٰ⁠لِدَیَّ وَلِمَن دَخَلَ بَیۡتِیَ مُؤۡمِنࣰا وَلِلۡمُؤۡمِنِینَ وَٱلۡمُؤۡمِنَـٰتِۖ وَلَا تَزِدِ ٱلظَّـٰلِمِینَ إِلَّا تَبَارَۢا﴾", sora: "[نوح 28]" },
    { ayaah: "﴿كَلَّاۤ إِذَا بَلَغَتِ ٱلتَّرَاقِیَ * وَقِیلَ مَنۡۜ رَاقࣲ * وَظَنَّ أَنَّهُ ٱلۡفِرَاقُ * وَٱلۡتَفَّتِ ٱلسَّاقُ بِٱلسَّاقِ * إِلَىٰ رَبِّكَ یَوۡمَىِٕذٍ ٱلۡمَسَاقُ )", sora: "[القيامة 30]" },
    { ayaah: "﴿وَٱسۡتَعِینُوا۟ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِیرَةٌ إِلَّا عَلَى ٱلۡخَـٰشِعِینَ﴾", sora: "[45 البقرة]" },
    { ayaah: "﴿۞ أَتَأۡمُرُونَ ٱلنَّاسَ بِٱلۡبِرِّ وَتَنسَوۡنَ أَنفُسَكُمۡ وَأَنتُمۡ تَتۡلُونَ ٱلۡكِتَـٰبَۚ أَفَلَا تَعۡقِلُونَ﴾", sora: "[44 البقرة]" },
    { ayaah: "{وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ}", sora: "[فصلت 34]" },
    { ayaah: "﴿ٱلَّذِینَ ءَاتَیۡنَـٰهُمُ ٱلۡكِتَـٰبَ یَتۡلُونَهُۥ حَقَّ تِلَاوَتِهِۦۤ أُو۟لَـٰۤىِٕكَ یُؤۡمِنُونَ بِهِۦۗ وَمَن یَكۡفُرۡ بِهِۦ فَأُو۟لَـٰۤىِٕكَ هُمُ ٱلۡخَـٰسِرُونَ﴾", sora: "[121 البقرة]" },
];
var ayaahcontainer = document.getElementById('ayaah');
var soracontainer = document.getElementById('sora');

function random() {
    var randomIndex = Math.floor(Math.random() * arr.length);
    
    ayaahcontainer.innerHTML = arr[randomIndex].ayaah;
    soracontainer.innerHTML = arr[randomIndex].sora;
    
}


