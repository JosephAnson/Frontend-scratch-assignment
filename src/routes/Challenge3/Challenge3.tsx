import React, { useState } from 'react';
import Input from '../../components/Input';

import EN from '../../i18n/en.json';
import NL from '../../i18n/nl.json';

import Field from '../../components/Field';
import Button from '../../components/Button';

// App.js
export default function Challenge3() {
  const [languageString, setLanguageString] = useState('');
  const [language, setLanguage] = useState('en');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const languages: Record<string, Record<string, string>> = {
    en: EN,
    nl: NL
  };

  function getLanguageString(language: string, languageString: string): void {
    setError('');

    if (!languageString) {
      setError('Need to enter language string');
      return;
    }

    const lowercaseLanguageString = languageString.toLowerCase();
    if (lowercaseLanguageString in languages['en']) {
      setResult(languages[language][lowercaseLanguageString]);
    } else {
      setError('Language string doesnt exist');
    }
    setLanguageString('');
  }

  return (
    <main>
      <h1 className="font-semibold text-lg mb-2">Challenge 3!</h1>
      <h2 className="font-medium text-md mb-2">Language String tool</h2>

      <form>
        <Field
          label="Language String"
          labelFor="language-string"
          help="Available Strings: hi, name, country, english, dutch"
        >
          <Input
            id="language-string"
            value={languageString}
            placeholder="Search language string..."
            onChange={(e) => setLanguageString(e.target.value)}
          />
        </Field>

        <Field label="Select language" labelFor="language">
          <div className="input mb-1 relative rounded-md shadow-sm">
            <select
              id="language"
              className="select h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full y-1.5 px-4 sm:text-sm border-gray-300 rounded-md"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="nl">Dutch</option>
            </select>
          </div>
        </Field>

        <Button onClick={() => getLanguageString(language, languageString)}>GO</Button>
      </form>

      {error && (
        <div className="inline-block text-sm font-medium bg-red-500 text-white px-4 py-4 rounded my-2">
          {error}
        </div>
      )}

      {result && <div className="text-lg font-bold mt-4">Language string = {result}</div>}
    </main>
  );
}
