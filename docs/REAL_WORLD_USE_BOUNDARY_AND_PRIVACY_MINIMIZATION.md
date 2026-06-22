# Real-World Use Boundary and Privacy Minimization

## Purpose

This project is public, local-first, and synthetic-first. Real-world use occurs only when an end user copies a share-ready Markdown file into their own AI account and uses it with their own information.

## Data Boundary Table

| Context | Who controls it | Real dental data allowed? | Project responsibility |
| ------- | --------------- | ------------------------- | ---------------------- |
| Public GitHub repo | Maintainer | No | Keep examples synthetic and identifier-free |
| Local clone of repo | Developer / reviewer | No real patient data should be committed | Validate docs and code without real records |
| Maintainer communication | Maintainer | No | Do not request or collect real cases |
| End-user ChatGPT / Claude account | End user and their chosen AI provider | User may choose to enter their own information | Provide privacy-minimizing guidance, not hosting or processing |
| Dentist visit | User and dental professional | User-controlled | Provide handoff packet structure |

## Repo No-Real-Data Rule

The public repository must not contain real patient data, real clinic records, real dental images, real names, real contact details, real addresses, real patient IDs, passport numbers, resident card numbers, insurance numbers, My Number values, or other personal identifiers.

This prohibition applies to docs, tests, examples, manual test evidence, GitHub issues, pull requests, discussions, and release notes.

Do not include:

- real patient names
- real birthdays
- ID numbers
- health insurance card numbers
- phone numbers
- addresses
- clinic patient IDs
- QR codes or barcodes from real documents
- unredacted receipts
- real dental X-rays
- real intraoral photos
- real CT images
- real medical records
- real referral letters
- screenshots containing personal information

Synthetic examples must be clearly labeled synthetic.

## BYO-AI Real-World Rule

BYO-AI means the user brings their own AI account. The project does not collect, store, host, transmit, process, or review the user's real dental information.

The share-ready Markdown should remind users to minimize personal identifiers before sharing content with an AI assistant, especially if they plan to paste outputs elsewhere.

## User-Facing Real-Data-Use Note

English:

Use this in your own AI account only if you are comfortable entering your dental information there. Do not include names, phone numbers, addresses, ID numbers, insurance numbers, exact birthdays, or other details that are not needed for dental planning. This project repository does not receive or store your information.

Traditional Chinese:

只有在你願意把牙科資訊輸入到自己的 AI 帳號時，才使用這份流程。請不要輸入姓名、電話、地址、身分證件號碼、保險號碼、完整生日，或其他和牙科整理無關的可識別資料。本專案 repository 不會接收或儲存你的資訊。

Japanese:

自分のAIアカウントに歯科情報を入力してよいと判断した場合にだけ、このワークフローを使ってください。氏名、電話番号、住所、身分証番号、保険番号、正確な生年月日など、歯科情報整理に不要な個人識別情報は入力しないでください。このプロジェクトのリポジトリは、あなたの情報を受け取ったり保存したりしません。

## Data Minimization Checklist

- Request the minimum necessary information for the handoff task.
- Use a case ID instead of a real name.
- Use age range instead of exact birth date.
- Use general location rather than address.
- Remove clinic phone numbers, email addresses, and staff names unless needed for the user's private copy.
- Treat X-rays, CBCT, DICOM, and photos as records or attachments only.
- Avoid uploading real images to this repo.
- Avoid pasting raw IDs, insurance numbers, passport numbers, resident card numbers, or My Number values.
- Keep dental facts relevant to the handoff: symptoms, timeline, dentist statements, records, quote line items, missing records, and questions.

## Maintainer-Facing Rule

Maintainers must not collect real cases in GitHub issues, pull requests, discussions, release comments, or manual test artifacts. If a user submits real identifiers or records, maintainers should ask the user to remove the content and should avoid copying it into repository files.

## Privacy Boundary Summary

The repository provides a structure. The end user controls whether they use that structure in a private AI account. The project does not become a data processor for real dental cases unless a future architecture explicitly changes that boundary, which is outside v0.2.0.
