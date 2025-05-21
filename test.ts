// test.ts
import { convertM3U8ToMP4 } from 'm3u8-to-mp4-converter-pro';

(async () => {
  try {
    const outputPath = await convertM3U8ToMP4('https://luna.loom.com/id/5bbdeb480ba84e65b1b3de8c190e2003/rev/6a9306305113653ba1390929ea4e7c48702ed7c55fc73719545db80b063617591/resource/hls/playlist-split.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9sdW5hLmxvb20uY29tL2lkLzViYmRlYjQ4MGJhODRlNjViMWIzZGU4YzE5MGUyMDAzL3Jldi82YTkzMDYzMDUxMTM2NTNiYTEzOTA5MjllYTRlN2M0ODcwMmVkN2M1NWZjNzM3MTk1NDVkYjgwYjA2MzYxNzU5MS9yZXNvdXJjZS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzQ3OTE4NjczfX19XX0_&Signature=hbP-Zg8rdKyuI0jI-duDgEMiAehpX2ojveHskrZLMcch9D764TaiOO0zb14PpUtZijUfINtcmL%7EXhkIIXJenRZDyuVhY37zSFWuLZJ74I72MiPca04IhjTahCK0zUTMWtQNgunUvt-77p53nu-ntVcgkobIlDCPkS-%7EJRVYZjiw2tCEKnNWteLpWaqfFFNW0Weyf7vHe0MS0JU0VqoxQso5EX3-THqYyWP0vak2724M3MUZfxrw52kLcGrt0Al25PH68dYdoslzf%7EKKimyW95ImehaMNGNVNlqdYJ96DE2EExSyaoNLeCvG7Fh26k1j1y7NcKnBkndVMMCxmeBx15Q__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ', {
      outputDir: './output',
    });
    console.log('Downloaded MP4:', outputPath);
  } catch (err) {
    console.error('❌ Test failed:', err);
  }
})();
