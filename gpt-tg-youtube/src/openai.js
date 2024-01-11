import { Configuration, OpenAIApi } from 'openai'
import config from 'config'
import { createReadStream } from 'fs'
import { log } from 'console'

class OpenAI {
	roles = {
		ASSISTANT: 'assistant',
		USER: 'user',
		SYSTEM: 'system',
	}
	constructor(apiKey) {
		const configuration = new Configuration({
			apiKey,
		})
		this.openai = new OpenAIApi(configuration)
	}
	async chat(messages) {}
	async transcription(filepath) {
		try {
			const response = await this.openai.createTranscription(
				createReadStream(filepath),
				'whisper-1'
			)
			return response.data.text
		} catch (e) {
			console.log('Error while transcription', e.message)
		}
	}
}

export const openaiInstance = new OpenAI(config.get('OPENAI_KEY'))
