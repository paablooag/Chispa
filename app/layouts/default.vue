<template>
  <div class="flex min-h-screen flex-col bg-crema-100">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>
