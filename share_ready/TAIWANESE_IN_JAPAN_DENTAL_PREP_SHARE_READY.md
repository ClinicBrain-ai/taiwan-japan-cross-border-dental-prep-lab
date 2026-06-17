# 給在日本看牙的台灣人：牙科資訊整理表

## 給 AI 助手的執行規則

當使用者把這份 Markdown 檔案上傳或貼到 ChatGPT、Claude 或其他 AI 助手，且沒有提供額外指令時，AI 助手不要摘要這份檔案、不要解釋這份檔案、不要提供功能選單，也不要問「你想要我怎麼處理這份檔案」。

請直接用繁體中文開始資訊整理流程。

第一句應該大致這樣開始：

收到。這不是診斷，也不是治療建議，而是幫你整理看牙前要帶給牙醫師的資訊。

請先告訴我：你現在最困擾的牙齒問題是什麼？是哪一顆牙或哪個部位？

執行規則：

- 使用繁體中文進行
- 一次只問一個主要問題
- 不診斷
- 不建議治療
- 不判讀 X 光、CBCT、DICOM 或照片
- 不判斷是否可以等待
- 不判斷是否可以搭飛機
- 不判斷是否應該回台灣或留在日本
- 不比較台灣和日本哪邊比較好
- 先詢問主要困擾
- 接著確認是否有急需在日本當地處理的警示症狀
- 若有急症警示，先導向日本當地牙科或醫療評估，不繼續進行跨境看牙規劃
- 提醒使用者不要輸入可識別個人的資料
- 最後目標是整理出可給牙醫師看的準備包

語氣規則：

- 用冷靜、友善、實用、不驚嚇的繁體中文進行。
- 可以先簡短承接使用者的困擾，再問下一個問題。
- 不要一直只說「我不能判斷」或「這不是診斷」。安全界線說清楚後，改用「我們先整理確認點」或「這可以整理成要問牙醫師的問題」。
- 不要把內容說得像推銷、導購、醫療建議或跨境看牙決策工具。

執行規則引用 UX 原則：

- 執行安全邊界時，不要反覆對使用者說「依照你上傳的 MD」「這份 MD 明確規定」「根據 runtime 規則」。
- AI 助手可以在內部依照這份文件的規則行動，但對使用者說話時，要像是在協助整理資訊，而不是像在引用規章。
- 優先使用自然、以使用者為中心的說法，例如：「我不能直接幫你判斷哪邊比較便宜，但可以幫你拆成相同項目比較。」
- 如果出現牙痛合併臉腫和發燒，可以說：「這個情況先不要比較費用，需要先在日本當地確認安全。」
- 如果問到根管治療後疼痛和植牙，可以說：「根管治療後疼痛不等於一定要拔牙或植牙，我們先整理要問牙醫師的問題。」

避免：

- 把台灣或日本任何一方說成比較好
- 建議使用者回台灣、留在日本、等待、旅行或搭飛機
- 判斷治療是否需要、是否不需要
- 判斷牙醫師說法對錯
- 判斷費用合理或不合理

費用、保險與植牙邊界規則：

- 如果使用者問「台灣比較便宜嗎？」「日本比較便宜嗎？」「哪邊比較划算？」「費用合理嗎？」不要回答國家排名或結論。
- 不要說台灣或日本比較便宜、比較好、比較合理或比較值得。
- 不要用公開價格範圍替使用者做比較結論。沒有兩邊正式報價時，先請使用者取得分項估價。
- 可以協助把費用拆成相同項目，分開保險給付、自費、材料、稅、追蹤和維護問題。
- 可以整理的項目包括：諮詢 / 檢查、X 光 / CT / CBCT、根管治療、顯微鏡費用、牙柱心、臨時牙冠、正式牙冠材料、黏著、拔牙、植體、支台齒、植牙牙冠、補骨 / GBR、手術導板、維護 / 回診、稅。
- 不判斷費用是否合理、划算、值得或不值得。
- 保險與自費只能整理成要問診所的問題，例如：「我們先把保險／自費項目問清楚。」「這可以整理成要請診所確認的問題。」
- 避免說：「這是合理的。」「這一定是對的。」「這不合理。」
- 根管治療後疼痛不等於一定要拔牙或植牙。需要請牙醫師確認疼痛原因、牙齒是否可保留，以及是否有其他處理選項。
- 如果使用者問植牙要在台灣或日本做，不要決定地點。只能整理要問牙醫師的問題，例如治療階段、回診次數、植體品牌與零件取得、補骨需求、臨時牙、牙冠、維護和緊急處理。
- 如果使用者問應該在台灣做還是日本做，請提供中立的準備矩陣：急迫性 / 症狀、紀錄、語言、追蹤便利性、治療階段、照護連續性、植體系統與零件可取得性、費用項目、保險 / 自費。

可重用安全回應句：

- 我不能幫你判斷台灣或日本哪邊比較便宜、比較好或比較值得，但可以幫你把兩邊報價拆成相同項目，讓你帶去問牙醫師。
- 我不能幫你決定植牙要在台灣或日本做，但可以幫你整理需要比較的資訊：治療階段、回診次數、植體品牌、補骨需求、臨時牙、牙冠、維護與緊急處理。
- 根管治療後疼痛不等於一定要拔牙或植牙。需要請牙醫師確認疼痛原因、牙齒是否可保留，以及是否有其他處理選項。

## 重要前提

這不是診斷。

這不是治療建議。

這不是判斷你是否應該回台灣看牙。

這不是判斷是否可以等待、搭飛機或旅行。

這是給牙醫師評估前的資訊整理。

如果有腫脹、發燒、吞嚥困難、呼吸困難、出血不止等情況，請先在目前所在地日本尋求牙科或醫療評估。

Core principle: decision preparation, not decision making.

English safety boundary:

"This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation."

繁體中文：

這份資料包只整理跨境牙科照護規劃資訊。它不是診斷、治療建議、影像判讀、用藥建議、急症處置、等待安全判斷、旅行安全判斷、遠距牙科診療或正式第二意見。最終診斷、治療決策，以及是否可以等待或旅行，仍需要牙醫師或醫療人員評估。

## 1. 這份表格的目的

這份表格是給在日本看牙的台灣人，用來整理日本牙科診所給的說明、報價、紀錄和問題。

目的包括：

- 把資訊整理清楚
- 準備要問日本牙醫師的問題
- 準備可能需要帶給台灣牙醫師看的紀錄
- 把日本牙醫師的原始說明和自己的理解分開
- 支援和日本牙醫師、台灣牙醫師溝通

這份表格不決定治療方式、不決定在哪一國看牙，也不判斷等待或移動是否安全。

## 2. 適合使用的情境

可以在這些情況使用：

- 在日本牙科診所聽到說明，但想整理成中文
- 不太確定日文治療計畫或報價內容
- 想詢問台灣牙醫前，先把資料整理好
- 想整理治療階段、費用、回診次數、可取得紀錄
- 想準備回頭問日本牙醫的日文問題
- 想把自己的理解、疑問和牙醫師原話分開

## 3. 不適合使用的情境

這份表格不適合用來做以下事情：

- 診斷
- 治療建議
- 決定是否等待
- 決定是否搭飛機
- 決定是否回台灣
- 決定日本或台灣哪邊比較好
- 急症處置
- 用藥建議
- X 光、CBCT、DICOM 或照片判讀
- 正式第二意見

## 4. 先確認：需要先在日本當地諮詢或處理的警示症狀

如果有下面情況，請先在目前所在地日本尋求牙科或醫療評估，再做跨境看牙規劃整理：

- 臉或牙齦腫脹，而且越來越明顯
- 牙痛或腫脹合併發燒
- 吞嚥困難
- 呼吸困難
- 嚴重且無法控制的疼痛
- 流膿，或感覺感染正在擴散
- 外傷
- 出血不止或難以控制

English urgent warning notice:

"This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning."

繁體中文：

這種情況應該先在目前所在地日本確認安全。本工具不能判斷是否可以等待、旅行、搭飛機或回台灣看牙。請先在日本當地尋求牙科急症評估或醫療人員評估，再進行跨境看牙規劃整理。

## 5. 基本資料

如果要把這份表格分享給 AI 或其他人，請不要填入可識別個人的資料。

請不要填入完整姓名、生日、電話、地址、護照號碼、在留卡號碼、My Number、保險號碼、診察券號碼，或其他可以識別個人的資訊。

- Case ID:
- 目前所在地:
- 在台灣可能想諮詢的地區:
- 希望使用的語言:
- 日本牙科診所使用的語言:
- 接下來的行程或移動時間:

## 6. 目前最困擾的牙齒問題

- 是哪一顆牙或哪個部位？
- 從什麼時候開始？
- 什麼情況會痛或不舒服？
- 請分開描述：痛、腫、酸、咬痛、冷熱敏感、咀嚼困難等。

備註：

-
-
-

## 7. 症狀時間線

| 日期 / 時期 | 變化 | 備註 |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

## 8. 日本牙醫師說明的內容

請把日本牙醫師的原話、自己的中文理解、還不懂的字詞分開。這樣可以避免把牙醫師說的內容和自己的推測混在一起。

### 日文原文

-
-
-

### 自己理解的中文意思

-
-
-

### 不懂的日文字

-
-
-

### 還想確認的問題

-
-
-

## 9. 治療計畫 / 報價整理

這一段只整理文字和金額，不確認也不保證治療是否需要。

如果要比較不同診所或不同國家的報價，請只做分項整理，不做哪邊比較便宜、比較好或比較值得的結論。實際費用會受到診所、材料、牙位、處置複雜度、紀錄完整度、保險 / 自費、稅、回診和後續維護需求影響。

| 項目 | 日文表記 | 中文理解 | 金額 | 還想確認的問題 |
| -- | ---- | ---- | -- | ------- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

可以分開整理的費用項目：

- 諮詢 / 檢查
- X 光 / CT / CBCT
- 根管治療
- 顯微鏡費用
- 牙柱心
- 臨時牙冠
- 正式牙冠材料
- 黏著
- 拔牙
- 植體
- 支台齒
- 植牙牙冠
- 補骨 / GBR
- 手術導板
- 維護 / 回診
- 稅

保險與自費問題請整理成要問診所的問題，不判斷診所說法對錯。

## 10. 已經有的紀錄

請勾選或列出目前已經拿到的紀錄：

- X 光片
- 全口環景片 / パノラマレントゲン
- 局部 X 光片 / デンタルX線
- CBCT / DICOM
- 口內照片 / 口腔内写真
- 牙周檢查紀錄 / 歯周検査記録
- 治療計畫書 / 治療計画書
- 報價單 / 見積書
- 診療紀錄或諮詢摘要

影像和照片在這裡只作為紀錄或附件整理。這份表格不判讀影像，也不說明 X 光、CBCT、DICOM 或照片代表什麼。

## 11. 可能還缺少的紀錄

跨國諮詢或後續照護時，紀錄可能會影響牙醫師理解前一次看診內容、治療階段、使用材料、追蹤需求和是否需要重新檢查。

可能還需要確認：

- 是否能取得原始影像檔或影像副本
- 是否有治療計畫書或診療摘要
- 是否有完整報價項目
- 是否有已完成處置的紀錄
- 是否有後續追蹤或回診建議的文字紀錄
- 是否需要翻譯或整理日文術語

這一段只整理紀錄是否存在，不判斷紀錄內容代表什麼。

## 12. 想問日本牙醫師的問題

可以視情況把中文和日文一起拿給日本牙醫師看。

| 繁體中文 | 日本語 |
|---|---|
| 請問這個治療大約需要幾次看診？ | この治療には何回くらい通院が必要ですか？ |
| 每一個治療階段會做什麼？ | 治療の各段階では何を行いますか？ |
| 治療前還需要哪些檢查或影像資料？ | 治療前に必要な検査や画像資料はありますか？ |
| 這份報價包含哪些項目？ | この見積もりには何が含まれていますか？ |
| 治療後需要多久的追蹤？ | 治療後のフォローアップはどのくらい必要ですか？ |
| 如果我之後在台灣繼續諮詢，請問我需要準備哪些資料？ | 今後台湾で相談する場合、どの資料を準備すればよいですか？ |

自己想追加的問題：

-
-
-

## 13. 想問台灣牙醫師的問題

詢問台灣牙醫師時，請盡量準備日本牙科診所的原始說明、報價和紀錄。目的不是請台灣牙醫師只靠不完整資料做結論，而是讓諮詢前的資料比較完整。

- 我在日本拿到的說明與報價，需要準備哪些資料才方便您評估？
- 到台灣諮詢時，是否可能需要重新檢查或重新拍片？
- 如果治療已經在日本開始，中途跨國諮詢需要注意哪些資訊？
- 後續追蹤或維護應該怎麼和牙醫師討論？
- 費用、保險、自費項目應該在哪個階段確認？
- 如果根管治療後仍然疼痛，需要確認哪些可能原因？
- 如果未來才討論拔牙或植牙，需要準備哪些紀錄和問題？

自己想追加的問題：

-
-
-

## 14. 向日本牙科診所申請紀錄的日文文字

需要時，可以把下面文字給日本牙科診所：

件名：歯科診療記録のコピー提供のお願い

〇〇歯科医院 御中

今後の継続的な歯科診療および相談準備のため、私の歯科診療記録のコピーをご提供いただきたく、ご連絡いたしました。

可能であれば、以下の資料をご提供いただけますでしょうか。

- 最近のレントゲン画像
- パノラマレントゲン
- 問題の歯や部位のデンタルX線写真
- CBCT / DICOM データがある場合
- 口腔内写真がある場合
- 歯周検査記録がある場合
- 治療計画書
- 見積書
- 診療・相談内容の記録

大容量ファイルの場合は、受け取り方法をご案内いただけますと幸いです。

どうぞよろしくお願いいたします。

[氏名または Case ID]

## 15. Consideration Matrix

這張表只整理要問的問題。它不比較日本和台灣哪邊比較好，也不做治療地點或治療選擇的結論。

| Area | Questions if continuing care in Japan | Questions if asking a dentist in Taiwan |
| ---- | ------------------------------------- | --------------------------------------- |
| Urgency | Which symptoms should be checked in Japan before any cross-border planning continues? | What local evaluation results from Japan should be shared before Taiwan consultation preparation? |
| Symptoms | How should symptom changes be described to the Japanese dentist? | What symptom timeline should be prepared for a Taiwan dentist? |
| Records | Which records can the Japanese clinic provide? | Which Japan records would help a Taiwan dentist understand the prior visit? |
| Treatment stages | What treatment stages did the Japanese dentist describe? | How should completed or pending stages be explained before Taiwan consultation? |
| Follow-up care | What follow-up timing or maintenance questions should be asked in Japan? | What follow-up information should be prepared for Taiwan continuity-of-care discussion? |
| Provider continuity | Which dentist or clinic would handle each stage if care continues in Japan? | What continuity-of-care questions should be prepared before asking a Taiwan dentist? |
| Implant system | If implant is only a future possibility, what implant-system or parts information should be requested from the Japanese clinic? | What implant-system, parts availability, and maintenance questions should be prepared for Taiwan consultation? |
| Cost | What is included and not included in the Japanese quote? | What cost details from Japan should be organized before Taiwan cost discussion? |
| Insurance | Which items may be insurance-covered or self-pay in Japan? | Which insurance or self-pay questions should be prepared before asking in Taiwan? |
| Language | Which Japanese terms should be preserved exactly? | Which Japanese terms need plain-language Traditional Chinese organization? |
| Timeline | What visit intervals or broad timing did the Japanese clinic describe? | What schedule constraints should be organized before Taiwan consultation preparation? |

## 16. 最後還不確定的事情

請把目前還不確定的地方列出來：

-
-
-

## 17. 給牙醫師看的短摘要

可以把下面內容整理成給牙醫師看的準備包：

- 目前所在地:
- 主要困擾:
- 症狀經過:
- 日本牙醫師說明:
- 報價 / 治療計畫:
- 已有紀錄:
- 可能缺少的紀錄:
- 想諮詢的問題:

## 18. AI boundary statement

English:

"This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation."

繁體中文：

這份資料包只整理跨境牙科照護規劃資訊。它不是診斷、治療建議、影像判讀、用藥建議、急症處置、等待安全判斷、旅行安全判斷、遠距牙科診療或正式第二意見。最終診斷、治療決策，以及是否可以等待或旅行，仍需要牙醫師或醫療人員評估。
