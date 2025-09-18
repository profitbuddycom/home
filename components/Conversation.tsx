
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, Choice, DynamicQuestion } from '../types';

// --- Sub-Components defined in the same file for simplicity ---

const AiTypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 p-3">
        <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
);

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isAi = message.sender === 'ai';
    return (
        <div className={`flex items-end gap-2 ${isAi ? 'justify-start' : 'justify-end'}`}>
            {isAi && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    AI
                </div>
            )}
            {message.text && (
                 <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md animate-fade-in-up ${isAi ? 'bg-stone-100 text-stone-800 rounded-bl-none' : 'bg-amber-600 text-white rounded-br-none'}`}>
                    <p className="text-sm md:text-base">{message.text}</p>
                </div>
            )}
        </div>
    );
};

interface UserInputProps {
    onUserResponse: (value: string | string[]) => void;
    dynamicQuestion: DynamicQuestion | null;
    latestAiMessage: ChatMessage | undefined;
    isAiTyping: boolean;
}

const UserInput: React.FC<UserInputProps> = ({ onUserResponse, dynamicQuestion, latestAiMessage, isAiTyping }) => {
    const [textInput, setTextInput] = useState('');
    const [multiSelect, setMultiSelect] = useState<string[]>([]);
    
    // If a dynamic question is available, it takes precedence.
    const inputType = dynamicQuestion?.inputType ?? (latestAiMessage?.isMultiSelect ? 'multi-select' : latestAiMessage?.choices ? 'single-choice' : 'text');
    const choices = dynamicQuestion?.choices ?? latestAiMessage?.choices;
    const multiSelectOptions = dynamicQuestion?.choices ?? latestAiMessage?.isMultiSelect?.options;
    const multiSelectSubmitText = latestAiMessage?.isMultiSelect?.submitText ?? 'Auswahl bestätigen';
    
    const isInputDisabled = isAiTyping;

    const handleTextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (textInput.trim()) {
            onUserResponse(textInput.trim());
            setTextInput('');
        }
    };

    const toggleMultiSelect = (value: string) => {
        setMultiSelect(prev =>
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        );
    };

    const handleMultiSelectSubmit = () => {
        if(multiSelect.length > 0) {
            onUserResponse(multiSelect);
            setMultiSelect([]);
        }
    }

    if (isAiTyping) return null;

    if (inputType === 'single-choice' && choices) {
        return (
            <div className="h-full overflow-y-auto pr-2">
                <div className="flex flex-wrap gap-2 justify-center p-2 animate-fade-in-up">
                    {choices.map(choice => (
                        <button
                            key={choice.value}
                            disabled={isInputDisabled}
                            onClick={() => onUserResponse(choice.value)}
                            className="px-4 py-2 border-2 border-stone-300 text-stone-700 font-semibold rounded-full hover:bg-stone-100 hover:text-stone-900 hover:border-stone-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (inputType === 'multi-select' && multiSelectOptions) {
        return (
            <div className="animate-fade-in-up w-full max-w-lg mx-auto h-full flex flex-col">
                <div className="flex-grow overflow-y-auto mb-4 pr-2">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {multiSelectOptions.map(option => (
                            <button
                                key={option.value}
                                disabled={isInputDisabled}
                                onClick={() => toggleMultiSelect(option.value)}
                                className={`px-3 py-2 border-2 rounded-full font-semibold transition-all duration-200 ${multiSelect.includes(option.value) ? 'bg-amber-600 text-white border-amber-600' : 'bg-transparent text-stone-700 border-stone-300 hover:border-stone-500'}`}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    disabled={isInputDisabled || multiSelect.length === 0}
                    onClick={handleMultiSelectSubmit}
                    className="flex-shrink-0 w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {multiSelectSubmitText}
                </button>
            </div>
        )
    }

    if (inputType === 'text' && dynamicQuestion?.inputType !== 'submit') {
        return (
            <form onSubmit={handleTextSubmit} className="p-2 w-full max-w-lg mx-auto">
                <div className="flex items-center border-2 border-stone-300 rounded-full p-1 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
                    <input
                        type="text"
                        value={textInput}
                        onChange={e => setTextInput(e.target.value)}
                        placeholder={"Deine Antwort..."}
                        disabled={isInputDisabled}
                        className="w-full px-4 py-2 bg-transparent border-none focus:ring-0 text-stone-800"
                        autoFocus
                    />
                    <button type="submit" disabled={isInputDisabled || !textInput.trim()} className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center transition-opacity disabled:opacity-50 hover:bg-amber-700">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
            </form>
        );
    }
    
    return null;
};


// --- Main Component ---

interface ConversationProps {
    messages: ChatMessage[];
    onUserResponse: (value: string | string[]) => void;
    isAiTyping: boolean;
    dynamicQuestion: DynamicQuestion | null;
}

const Conversation: React.FC<ConversationProps> = ({ messages, onUserResponse, isAiTyping, dynamicQuestion }) => {
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            const { scrollHeight } = messagesContainerRef.current;
            messagesContainerRef.current.scrollTo({ top: scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isAiTyping]);
    
    const latestAiMessage = [...messages].reverse().find(m => m.sender === 'ai');

    return (
        <div className="flex flex-col h-full">
            <div ref={messagesContainerRef} className="flex-grow overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isAiTyping && (
                    <div className="flex items-end gap-2 justify-start">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            AI
                        </div>
                        <div className="bg-stone-100 rounded-2xl rounded-bl-none shadow-md">
                            <AiTypingIndicator />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex-shrink-0 p-4 border-t border-stone-200 min-h-[160px] max-h-[280px] flex flex-col justify-center">
                <UserInput
                    onUserResponse={onUserResponse}
                    dynamicQuestion={dynamicQuestion}
                    latestAiMessage={latestAiMessage}
                    isAiTyping={isAiTyping}
                />
            </div>
        </div>
    );
};

export default Conversation;