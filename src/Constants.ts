import os = require('os');
import path = require('path');

export const PMD_VERSION = '6.34.0';
export const CATALOG_FILE = 'Catalog.json';
export const CUSTOM_PATHS_FILE = 'CustomPaths.json';
export const CONFIG_FILE = 'Config.json';
export const PMD_CATALOG_FILE = 'PmdCatalog.json';
export const INTERNAL_ERROR_CODE = 500;

export interface EnvOverridable {
	getSfdxScannerPath(): string;
}

export class ProdOverrides implements EnvOverridable {
	public getSfdxScannerPath(): string {
		return path.join(os.homedir(), '.sfdx-scanner');
	}
}

export enum ENGINE {
	PMD = 'pmd',
	PMD_CUSTOM = 'pmd-custom',
	ESLINT = 'eslint',
	ESLINT_LWC = 'eslint-lwc',
	ESLINT_TYPESCRIPT = 'eslint-typescript',
	ESLINT_CUSTOM = 'eslint-custom',
	RETIRE_JS = 'retire-js'
}

/**
 * Main engine types that have more than one variation
 */
export const EngineBase = {
	PMD: 'pmd',
	ESLINT: 'eslint'
}

/**
 * These are the filter values that Users can filter by when using
 * --engine flag
 */
export const AllowedEngineFilters = [
	ENGINE.ESLINT,
	ENGINE.ESLINT_LWC,
	ENGINE.ESLINT_TYPESCRIPT,
	ENGINE.PMD,
	ENGINE.RETIRE_JS
]


export enum LANGUAGE {
	APEX = 'apex',
	JAVA = 'java',
	JAVASCRIPT = 'javascript',
	TYPESCRIPT = 'typescript',
	VISUALFORCE = 'vf'
}

export const Services = {
	Config: "Config",
	RuleManager: "RuleManager",
	RuleEngine: "RuleEngine",
	RuleCatalog: "RuleCatalog",
	RulePathManager: "RulePathManager",
	EnvOverridable: "EnvOverridable"
};

export enum CUSTOM_CONFIG {
	EslintConfig = "EslintConfig",
	PmdConfig = "PmdConfig"
}

export const HARDCODED_RULES = {
	FILES_MUST_COMPILE: {
		name: 'files-must-compile',
		category: 'Scanner Internal'
	}
};
