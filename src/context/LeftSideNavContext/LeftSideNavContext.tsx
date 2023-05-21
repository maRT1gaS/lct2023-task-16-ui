import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface ILeftSideNavContext {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const LeftSideNavContext = createContext({} as ILeftSideNavContext);

export const LeftSideNavCtxProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return <LeftSideNavContext.Provider value={{ isOpen, setIsOpen }}>{children}</LeftSideNavContext.Provider>;
};

export const useLeftSideNavContext = () => {
	const context = useContext(LeftSideNavContext);

	if (!context) {
		throw new Error('useLeftSideNavContext use outside LeftSideNavCtxProvider');
	}

	return context;
};
