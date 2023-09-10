import {
  StyledContainedButton,
  StyledOutlinedButton,
} from '@components/overrided/Button'
import { ReactNode } from 'react'
import { AlertDialog as Dialog, XStack, YStack } from 'tamagui'

interface Props {
  openDialogButton: ReactNode
  isOpen: boolean
}

export function AlertDialog({ openDialogButton, isOpen }: Props) {
  return (
    <Dialog>
      <Dialog.Trigger asChild>{openDialogButton}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Content key="content">
          <YStack jc="center" ai="center" gap={16}>
            <Dialog.Description
              maxWidth={'90%'}
              height={70}
              fontSize={18}
              fontFamily={'$nunito'}
              fontWeight={'$7'}
              textAlign="center"
              color={'$base_200'}
            >
              Deseja realmente excluir o registro da refeição?
            </Dialog.Description>
            <XStack gap={12}>
              <Dialog.Cancel asChild>
                <StyledOutlinedButton fontFamily={'$nunito'} fontWeight={'$7'}>
                  Cancelar
                </StyledOutlinedButton>
              </Dialog.Cancel>
              <StyledContainedButton fontFamily={'$nunito'} fontWeight={'$7'}>
                Sim, excluir
              </StyledContainedButton>
            </XStack>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
