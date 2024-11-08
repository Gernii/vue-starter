<script setup lang="ts">
import { Dialog } from '@ark-ui/vue'
import LucidePlus from '~icons/lucide/plus'
import { useModal } from '../model/modal'
import * as m from '@i18n/messages'

const modal = useModal()
</script>

<template>
  <button class="btn btn-primary btn-sm" @click="modal.showModal">
    {{ m.neat_awful_eagle_create() }} <LucidePlus />
  </button>

  <Dialog.Root v-model:open="modal.visible" lazyMount unmountOnExit>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner class="fixed inset-0 flex items-center justify-center">
        <Dialog.Content
          class="card mx-2 min-w-[300px] animate-fade-up animate-duration-200 animate-ease-out"
        >
          <div class="card-body bg-base-100">
            <Dialog.Title class="card-title">{{ m.loose_crazy_fireant_engage() }}</Dialog.Title>
            <Dialog.Description>{{ m.hour_fuzzy_kestrel_wave() }}</Dialog.Description>
            <div class="card-actions justify-end">
              <Dialog.CloseTrigger class="btn btn-primary btn-sm">
                {{ m.loud_aware_shark_peel() }}
              </Dialog.CloseTrigger>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
