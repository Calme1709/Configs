module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"jsdoc",
		"node"
	],
	env: {
		es2020: true
	},
	parserOptions: {
        sourceType: "module",
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true
		},
	},
	settings: {
		jsdoc: {
			mode: "typescript"
		},
		node: {
			tryExtensions: [ ".js", ".json", ".jsx", ".ts", ".tsx" ]
		}
	},
	rules: {
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": [
			"error",
			{
				"skipStrings": true,
				"skipComments": true,
				"skipTemplates": true,
				"skipRegExps": true
			}
		],
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"require-atomic-updates": "error",
		"use-isnan": [
			"error",
			{
				"enforceForSwitchCase": true,
				"enforceForIndexOf": true
			}
		],
		"valid-typeof": "error",
		"accessor-pairs": [
			"error",
			{
				"enforceForClassMembers": true
			}
		],
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"complexity": [
			"error",
			15
		],
		"consistent-return": "error",
		"curly": [
			"error",
			"all"
		],
		"default-case": "error",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		"eqeqeq": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		"max-classes-per-file": "error",
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-constructor-return": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-redeclare": [
			"error",
			{
				"builtinGlobals": true
			}
		],
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-with": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"radix": "error",
		"vars-on-top": "error",
		"wrap-iife": [
			"error",
			"inside"
		],
		"yoda": [
			"error",
			"never"
		],
		"strict": [
			"error",
			"never"
		],
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"array-bracket-newline": [
			"error",
			{
				"multiline": true,
				"minItems": 5
			}
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"array-element-newline": [
			"error",
			"consistent"
		],
		"block-spacing": [
			"error",
			"always"
		],
		"capitalized-comments": [
			"error",
			"always",
			{
				"ignoreConsecutiveComments": true
			}
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"comma-style": "error",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"eol-last": [
			"error",
			"never"
		],
		"func-names": [
			"error",
			"always"
		],
		"func-style": [
			"error",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": [
			"error",
			"multiline"
		],
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{
				"overrides": {
					"if": {
						"after": false
					},
					"for": {
						"after": false
					},
					"while": {
						"after": false
					}
				}
			}
		],
		"line-comment-position": "error",
		"linebreak-style": "error",
		"lines-around-comment": [
			"error",
			{
				"beforeLineComment": true,
				"allowBlockStart": true
			}
		],
		"lines-between-class-members": "error",
		"max-depth": [
			"error",
			{
				"max": 5
			}
		],
		"max-len": [
			"error",
			{
				"code": 140,
				"tabWidth": 1,
				"ignoreComments": false,
				"ignoreUrls": true,
				"ignoreStrings": false,
				"ignoreTemplateLiterals": false,
				"ignoreRegExpLiterals": false
			}
		],
		"max-lines": "error",
		"max-lines-per-function": "error",
		"max-nested-callbacks": [
			"error",
			{
				"max": 5
			}
		],
		"max-params": [
			"error",
			4
		],
		"max-statements-per-line": "error",
		"multiline-comment-style": [
			"error",
			"bare-block"
		],
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-cap": "error",
		"new-parens": [
			"error",
			"always"
		],
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 4
			}
		],
		"no-bitwise": "error",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"no-multi-assign": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxEOF": 0,
				"maxBOF": 0
			}
		],
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": "error",
		"no-tabs": [
			"error",
			{
				"allowIndentationTabs": true
			}
		],
		"no-trailing-spaces": "error",
		"no-underscore-dangle": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": [
			"error",
			{
				"multiline": true,
				"consistent": true
			}
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"one-var": [
			"error",
			"never"
		],
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": [
			"error",
			"after"
		],
		"padded-blocks": [
			"error",
			"never"
		],
		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "prev": "*", "next": "return" }
		],
		"prefer-exponentiation-operator": "error",
		"prefer-object-spread": "error",
		"quote-props": [
			"error",
			"as-needed"
		],
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"never"
		],
		"switch-colon-spacing": "error",
		"template-tag-spacing": "error",
		"arrow-body-style": [
			"error",
			"as-needed"
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": "error",
		"constructor-super": "error",
		"generator-star-spacing": [
			"error",
			{
				"before": true,
				"after": false
			}
		],
		"no-class-assign": "error",
		"no-confusing-arrow": "error",
		"no-const-assign": "error",
		"no-duplicate-imports": "error",
		"no-new-symbol": "error",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template":  "error",
		"require-yield": "error",
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": [
			"error", 
			{
				"before": true, "after": false
			}
		],

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": [
			"error",
			{
				"default": "array-simple"
			}
		],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/class-literal-property-style": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": [
			"error",
			"interface"
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				"accessibility": "explicit"
			}
		],
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				"default": {
					"memberTypes": [
						// Index signature
						"signature",
					  
						// Fields
						"public-static-field",
						"protected-static-field",
						"private-static-field",
						"public-instance-field",
						"protected-instance-field",
						"private-instance-field",
						"public-abstract-field",
						"protected-abstract-field",
						"private-abstract-field",
					  
						// Constructors
						"public-constructor",
						"protected-constructor",
						"private-constructor",
					  
						// Methods
						"public-static-method",
						"protected-static-method",
						"private-static-method",
						"public-instance-method",
						"protected-instance-method",
						"private-instance-method",
						"public-abstract-method",
						"protected-abstract-method",
						"private-abstract-method"
					],
					"order": "as-written"
				}
			}
		],
		"@typescript-eslint/method-signature-style": [
			"error",
			"method"
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"selector": "default",
				"format": [ "strictCamelCase" ],
				"leadingUnderscore": "forbid",
				"trailingUnderscore": "forbid"
			},
			{
				"selector": "typeLike",
				"format": [ "StrictPascalCase" ],
				"leadingUnderscore": "forbid",
				"trailingUnderscore": "forbid"
			},
			{
				"selector": "interface",
				"format": [ "StrictPascalCase" ],
				"leadingUnderscore": "forbid",
				"trailingUnderscore": "forbid",
				"prefix": [ "I" ]
			},
			{
				"selector": "enumMember",
				"format": [ "StrictPascalCase" ],
				"leadingUnderscore": "forbid",
				"trailingUnderscore": "forbid"
			},
			{
				"selector": "property",
				"format": null
			}
		],
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/no-unused-vars-experimental": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/triple-slash-reference": [
			"error",
			{
				"path": "never",
				"types": "never",
				"lib": "never"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "error",
		"@typescript-eslint/brace-style": [
			"error",
			"1tbs"
		],
		"@typescript-eslint/comma-spacing": "error",
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/func-call-spacing": [
			"error",
			"never"
		],
		"@typescript-eslint/indent": [
			"error",
			"tab"
		],
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-unused-vars-experimental": [
			"error",
			{
				"ignoredNamesRegex": "React"
			}
		],
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/quotes": "error",
		"@typescript-eslint/return-await": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				"anonymous": "never",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/no-confusing-void-expression": [
			"error", {
				"ignoreArrowShorthand": true
			}
		],
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/no-implicit-any-catch": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"jsdoc/check-access": "error",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-param-names": "error",
		"jsdoc/check-property-names": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-values": "error",
		"jsdoc/empty-tags": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/newline-after-description": "error",
		"jsdoc/no-types": "error",
		"jsdoc/require-description-complete-sentence": "error",
		"jsdoc/require-description": "error",
		"jsdoc/require-hyphen-before-param-description": "error",
		"jsdoc/require-jsdoc": [
			"error",
			{
				"publicOnly": false,
				"require": {
					"ArrowFunctionExpression": true,
					"ClassDeclaration": true,
					"ClassExpression": true,
					"FunctionDeclaration": true,
					"FunctionExpression": true,
					"MethodDefinition": true
				}
			}
		],
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		"jsdoc/require-param": "error",
		"jsdoc/require-property": "error",
		"jsdoc/require-property-description": "error",
		"jsdoc/require-property-name": "error",
		"jsdoc/require-returns-check": "error",
		"jsdoc/require-returns-description": "error",
		"jsdoc/require-returns": "error",
		"node/no-callback-literal": "error",
		"node/no-exports-assign": "error",
		"node/no-extraneous-import": "error",
		"node/no-extraneous-require": "error",
		"node/no-missing-require": "error",
		"node/no-unpublished-bin": "error",
		"node/no-unpublished-require": "error",
		"node/no-unpublished-import": "error",
		"node/no-unsupported-features/es-builtins": "error",
		"node/no-unsupported-features/node-builtins": "error",
		"node/process-exit-as-throw": "error",
		"node/shebang": "error",
		"node/no-deprecated-api": "error",
		"node/exports-style": [
			"error",
			"module.exports"
		],
		"node/file-extension-in-import": [
			"error",
			"never",
			{
				".svg": "always",
				".css": "always"
			}
		],
		"node/prefer-global/buffer": [
			"error",
			"never"
		],
		"node/prefer-global/console": [
			"error",
			"always"
		],
		"node/prefer-global/text-decoder": [
			"error",
			"always"
		],
		"node/prefer-global/text-encoder": [
			"error",
			"always"
		],
		"node/prefer-global/url-search-params": [
			"error",
			"always"
		],
		"node/prefer-global/url": [
			"error",
			"always"
		],
		"node/prefer-global/process": [
			"error",
			"always"
		],
		"node/prefer-promises/dns":	"error",
		"node/prefer-promises/fs": "error"
	}
}