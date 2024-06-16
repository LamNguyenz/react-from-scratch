import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	tag: WorkTag;
	key: Key;
	stateNode: any;
	type: any;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	ref: Ref;
	pendingProps: Props;
	memoizedProps: Props | null;
	memoizedState: any;
	alternate: FiberNode | null;
	flags: Flags;
	subtreeFlags: Flags;
	updateQueue: unknown;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// Instance
		this.tag = tag;
		this.key = key;
		this.ref = null;
		this.stateNode = null;
		this.type = null;

		// Fiber
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		// Effects
		this.pendingProps = pendingProps;
		this.memoizedProps = null;
		this.memoizedState = null;

		this.alternate = null;
		this.flags = NoFlags;
		this.subtreeFlags = NoFlags;
		this.updateQueue = null;
	}
}
