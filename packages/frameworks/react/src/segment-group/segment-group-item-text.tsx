import { segmentGroupAnatomy } from '@ark-ui/anatomy'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useSegmentGroupContext } from './use-segment-group-context'
import { useSegmentGroupItemContext } from './use-segment-group-item-context'

export interface SegmentGroupItemTextProps extends HTMLArkProps<'span'> {}

export const SegmentGroupItemText = forwardRef<HTMLSpanElement, SegmentGroupItemTextProps>(
  (props, ref) => {
    const context = useSegmentGroupContext()
    const itemContext = useSegmentGroupItemContext()
    const mergedProps = mergeProps(
      context.getItemTextProps(itemContext),
      segmentGroupAnatomy.build().itemText.attrs as Record<string, string>,
      props,
    )

    return <ark.span {...mergedProps} ref={ref} />
  },
)

SegmentGroupItemText.displayName = 'SegmentGroupItemText'
