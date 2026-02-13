# Forms Expert SDK

Embeddable forms SDK for submitting forms via the Forms Expert API.

## Installation

```bash
npm install @forms-expert/sdk
```

## Quick Start

### Vanilla JavaScript (CDN)

```html
<!-- Include the SDK -->
<script src="https://unpkg.com/@forms.expert/sdk@latest/dist/vanilla/index.global.js"></script>

<!-- Create a container with data attributes -->
<div
  data-forms-expert="contact"
  data-api-key="pk_live_xxxxxxxxxxxx"
  data-resource-id="your-resource-id"
  data-lang="en"
></div>

<!-- Forms will auto-initialize on page load -->
```

### Vanilla JavaScript (Module)

```javascript
import { FormWidget } from '@forms-expert/sdk/vanilla';

const widget = new FormWidget(
  {
    apiKey: 'pk_live_xxxxxxxxxxxx',
    resourceId: 'your-resource-id',
  },
  {
    target: '#my-form',
    slug: 'contact',
    lang: 'en',
    onSuccess: (response) => {
      console.log('Form submitted:', response.submissionId);
    },
    onError: (error) => {
      console.error('Submission failed:', error);
    },
  }
);

widget.init();
```

### React

```tsx
import { FormsExpertForm } from '@forms-expert/sdk/react';

function ContactPage() {
  return (
    <FormsExpertForm
      config={{
        apiKey: 'pk_live_xxxxxxxxxxxx',
        resourceId: 'your-resource-id',
      }}
      slug="contact"
      lang="en"
      submitText="Send Message"
      onSuccess={(response) => {
        console.log('Submitted:', response.submissionId);
      }}
    />
  );
}
```

### React Hook

```tsx
import { useForm, FormsProvider } from '@forms-expert/sdk/react';

// With provider
function App() {
  return (
    <FormsProvider
      config={{
        apiKey: 'pk_live_xxxxxxxxxxxx',
        resourceId: 'your-resource-id',
      }}
    >
      <ContactForm />
    </FormsProvider>
  );
}

function ContactForm() {
  const form = useForm({
    slug: 'contact',
    lang: 'en',
    onSuccess: (response) => alert('Thanks!'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await form.submit();
  };

  if (form.isSubmitted) {
    return <p>Thank you for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={form.values.email || ''}
        onChange={(e) => form.setValue('email', e.target.value)}
      />
      {form.errors.email && <span>{form.errors.email}</span>}

      <textarea
        value={form.values.message || ''}
        onChange={(e) => form.setValue('message', e.target.value)}
      />
      {form.errors.message && <span>{form.errors.message}</span>}

      <button type="submit" disabled={form.isLoading}>
        {form.isLoading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Vue 3

```vue
<script setup>
import { useForm } from '@forms-expert/sdk/vue';

const form = useForm({
  slug: 'contact',
  lang: 'en',
  config: {
    apiKey: 'pk_live_xxxxxxxxxxxx',
    resourceId: 'your-resource-id',
  },
  onSuccess: (response) => {
    alert('Form submitted!');
  },
});

const handleSubmit = async () => {
  await form.submit();
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="form.isSubmitted.value">
      Thank you for your submission!
    </div>
    
    <template v-else>
      <input
        type="email"
        :value="form.values.value.email"
        @input="form.setValue('email', $event.target.value)"
      />
      <span v-if="form.errors.value.email">{{ form.errors.value.email }}</span>

      <button type="submit" :disabled="form.isLoading.value">
        {{ form.isLoading.value ? 'Sending...' : 'Submit' }}
      </button>
    </template>
  </form>
</template>
```

## Core SDK

For programmatic form submission without UI:

```typescript
import { FormsSDK } from '@forms-expert/sdk';

const sdk = new FormsSDK({
  apiKey: 'pk_live_xxxxxxxxxxxx',
  resourceId: 'your-resource-id',
});

// Check if form is active (optionally pass language code)
const status = await sdk.isActive('contact', 'en');
if (!status.active) {
  console.error('Form not available');
}

// Validate data
const validation = await sdk.validate('contact', {
  email: 'user@example.com',
  message: 'Hello!',
});

if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}

// Submit form
const response = await sdk.submit('contact', {
  email: 'user@example.com',
  message: 'Hello!',
});

console.log('Submission ID:', response.submissionId);
```

### Form Handler

For more control, use the FormHandler:

```typescript
const handler = sdk.form('contact', {
  onSubmitStart: () => console.log('Submitting...'),
  onSubmitSuccess: (response) => console.log('Success!', response),
  onSubmitError: (error) => console.error('Error:', error),
  onValidationError: (errors) => console.error('Validation:', errors),
});

// Initialize to get form config
await handler.initialize();

// Check captcha requirement
if (handler.requiresCaptcha()) {
  const provider = handler.getCaptchaProvider(); // 'turnstile' | 'recaptcha' | 'hcaptcha'
  // Initialize captcha widget...
}

// Submit with validation
await handler.submit({ email: 'user@example.com' });
```

## Configuration

### SDK Config

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | `string` | Yes | Publishable API key (`pk_live_*` or `pk_test_*`) |
| `resourceId` | `string` | Yes | Resource ID containing the form |
| `baseUrl` | `string` | No | API base URL (default: `https://api.forms.expert/api/v1`) |

### Widget Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | `string \| HTMLElement` | - | Target element or selector |
| `slug` | `string` | - | Form slug |
| `submitText` | `string` | `'Submit'` | Submit button text |
| `showBranding` | `boolean` | `true` | Show "Powered by forms.expert" branding |
| `resetOnSuccess` | `boolean` | `false` | Reset form after successful submission |
| `lang` | `string` | - | Language code (e.g. `'en'`, `'uk'`) passed as `?lang=CODE` to the backend |
| `redirectUrl` | `string` | - | Redirect URL after success |
| `onSuccess` | `function` | - | Success callback |
| `onError` | `function` | - | Error callback |
| `onValidationError` | `function` | - | Validation error callback |

## Data Attributes (Auto-init)

| Attribute | Required | Description |
|-----------|----------|-------------|
| `data-forms-expert` | Yes | Form slug |
| `data-api-key` | Yes | Publishable API key |
| `data-resource-id` | Yes | Resource ID |
| `data-base-url` | No | Custom API base URL |
| `data-submit-text` | No | Submit button text |
| `data-branding` | No | Set to `'false'` to hide branding |
| `data-lang` | No | Language code (e.g. `en`, `uk`) |
| `data-reset` | No | Set to `'true'` to reset after submission |

## Styling

The SDK automatically reads styling from the form configuration set in the builder. Styling is merged from two sources: `schema.styling` (basic) and the top-level `styling` object (full hosted config). Top-level values take precedence.

### Styling Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `'light' \| 'dark' \| 'system'` | `'light'` | Color theme |
| `primaryColor` | `string` | `'#3b82f6'` | Primary accent color (button background) |
| `buttonColor` | `string` | `'#ffffff'` | Button text color |
| `backgroundColor` | `string` | `'#ffffff'` | Form background color |
| `textColor` | `string` | `'#1f2937'` | Text color |
| `errorColor` | `string` | `'#EF4444'` | Validation error color |
| `successColor` | `string` | `'#22c55e'` | Success state color (badge, messages) |
| `fontFamily` | `string` | `'Inter, system-ui, sans-serif'` | Font family |
| `fontSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Base font size |
| `buttonText` | `string` | `'Submit'` | Submit button label |
| `buttonStyle` | `'filled' \| 'outline'` | `'filled'` | Button fill style |
| `labelPosition` | `'top' \| 'left' \| 'floating'` | `'top'` | Label placement |
| `hideRequiredAsterisk` | `boolean` | `false` | Hide `*` on required fields |
| `transparentBackground` | `boolean` | `false` | Transparent form background |

### Border Radius

**Field border radius** (`borderRadius`) — applied to inputs, selects, textareas:

| Value | Pixels | Description |
|-------|--------|-------------|
| `'none'` | `0` | No rounding |
| `'sm'` | `2px` | Subtle rounding |
| `'md'` | `6px` | Medium rounding (default) |
| `'lg'` | `8px` | Large rounding |

**Button border radius** (`buttonRadius`) — applied to the submit button independently:

| Value | Pixels | Description |
|-------|--------|-------------|
| `'none'` | `0` | Square corners |
| `'small'` | `4px` | Subtle rounding |
| `'medium'` | `8px` | Medium rounding (default) |
| `'large'` | `12px` | Large rounding |
| `'full'` | `9999px` | Fully rounded / pill shape |

### Layout & Spacing

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| `formWidth` | `'narrow' \| 'medium' \| 'wide' \| 'full'` | `'full'` | Form container width |
| `formPadding` | `'compact' \| 'normal' \| 'relaxed' \| 'spacious'` | `'normal'` | Inner form padding |
| `fieldLayout` | `'stacked' \| 'inline'` | `'stacked'` | Field arrangement |
| `fieldSpacing` | `'compact' \| 'normal' \| 'relaxed' \| 'spacious'` | `'normal'` | Vertical gap between fields |
| `labelSpacing` | `'compact' \| 'normal' \| 'relaxed'` | `'normal'` | Gap between label and input |
| `buttonAlign` | `'left' \| 'center' \| 'right'` | `'left'` | Submit button alignment |

### Layout Fields (Heading & Paragraph)

**Heading size** (`headingSize`) — controls `<h2>` heading fields:

| Value | Font Size | Description |
|-------|-----------|-------------|
| `'small'` | `18px` | Small heading |
| `'medium'` | `22px` | Medium heading (default) |
| `'large'` | `28px` | Large heading |
| `'extra-large'` | `34px` | Extra-large heading |

**Paragraph size** (`paragraphSize`) — controls paragraph layout fields:

| Value | Font Size | Description |
|-------|-----------|-------------|
| `'small'` | `12px` | Small text |
| `'medium'` | `14px` | Medium text (default) |
| `'large'` | `16px` | Large text |

Individual paragraph fields can override the global size via the `paragraphFontSize` field property (in pixels).

### Form Name Display

The form name is rendered as an `<h1>` above the form fields. Visibility is controlled by `hostedConfig.showFormName` (defaults to `true`). This can be toggled in the form builder under Page Settings → "Show form name as title".

### Logo & Background

| Property | Type | Description |
|----------|------|-------------|
| `logoUrl` | `string` | URL for a logo image above the form |
| `logoPosition` | `'top-left' \| 'top-center' \| 'top-right'` | Logo alignment |
| `coverImageUrl` | `string` | Cover image URL |
| `backgroundImageUrl` | `string` | Background image URL |
| `backgroundOverlay` | `number` | Background overlay opacity (0–100) |

## Error Handling

```typescript
import { FormsError, FormValidationError } from '@forms-expert/sdk';

try {
  await sdk.submit('contact', data);
} catch (error) {
  if (error instanceof FormValidationError) {
    // Handle validation errors
    error.errors.forEach(({ field, message }) => {
      console.log(`${field}: ${message}`);
    });
  } else if (error instanceof FormsError) {
    // Handle API errors
    console.error(`${error.code}: ${error.message}`);
    
    if (error.code === 'FORM_RATE_LIMIT_EXCEEDED') {
      // Retry after delay
      setTimeout(() => retry(), error.retryAfter * 1000);
    }
  }
}
```

### Error Codes

| Code | Description |
|------|-------------|
| `FORM_NOT_FOUND` | Form does not exist |
| `FORM_NOT_PUBLISHED` | Form is not published |
| `VALIDATION_ERROR` | Form data validation failed |
| `CAPTCHA_REQUIRED` | CAPTCHA token missing |
| `CAPTCHA_FAILED` | CAPTCHA verification failed |
| `FORM_RATE_LIMIT_EXCEEDED` | Form-specific rate limit exceeded |
| `GLOBAL_RATE_LIMIT_EXCEEDED` | IP rate limit exceeded |
| `ORIGIN_NOT_ALLOWED` | Request origin not in whitelist |

## TypeScript

Full TypeScript support with exported types:

```typescript
import type {
  FormField,
  FormSchema,
  FormStyling,
  FormStatusResponse,
  ValidationResponse,
  SubmissionResponse,
  FormsSDKConfig,
} from '@forms-expert/sdk';
```

## License

MIT
