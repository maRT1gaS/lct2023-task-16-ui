import cn from 'classnames';
import classes from './ListInput.module.css';
import { useListInputUtils } from './hooks';
import type { IInputListProps } from './ListInput.d';
import { FieldLable } from '../FieldLable';
import TextareaAutosize from 'react-textarea-autosize';
import { Hint } from '@/ui';

export const ListInput = ({
	name,
	uniquePrefixId,
	value,
	inputField,
	onChange,
	id,
	labelTitle,
	isHiddenLabel = false,
}: IInputListProps) => {
	const {
		getIsActivePointList,
		handleOnKeyDown,
		arrValue,
		handleOnBlur,
		getIdPoint,
		handleOnFocus,
		handleOnChangeTextarea,
	} = useListInputUtils({ onChange, uniquePrefixId, value });

	return (
		<div>
			<FieldLable id={id} labelTitle={labelTitle} isHiddenLabel={isHiddenLabel} />

			<input
				id={id}
				readOnly
				className={classes.StateInput}
				tabIndex={-1}
				value={value}
				name={name}
				{...(inputField || {})}
			/>

			<div className={classes.ListInput}>
				{arrValue.map((val, index) => (
					<div key={index} className={classes.TextareaWrap}>
						<span
							className={cn(classes.TextareaSeparater, {
								[classes['TextareaSeparater--hidden']]: getIsActivePointList(index),
							})}
						/>
						<TextareaAutosize
							onFocus={() => handleOnFocus(index)}
							onBlur={() => handleOnBlur(index)}
							id={getIdPoint(index)}
							onKeyDown={(event) => handleOnKeyDown(event, index)}
							className={classes.Textarea}
							value={val}
							onChange={(event) => handleOnChangeTextarea({ event, index })}
							style={!getIsActivePointList(index) ? { paddingLeft: 15 } : {}}
						/>
					</div>
				))}
			</div>

			<Hint title='Заполняйте по элементно' type='info' />
		</div>
	);
};
