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
		"for-direction": "warn",
		"getter-return": "warn",
		"no-async-promise-executor": "warn",
		"no-await-in-loop": "warn",
		"no-compare-neg-zero": "warn",
		"no-cond-assign": "warn",
		"no-constant-condition": "warn",
		"no-control-regex": "warn",
		"no-debugger": "warn",
		"no-dupe-args": "warn",
		"no-dupe-else-if": "warn",
		"no-dupe-keys": "warn",
		"no-duplicate-case": "warn",
		"no-empty": "warn",
		"no-empty-character-class": "warn",
		"no-ex-assign": "warn",
		"no-extra-boolean-cast": "warn",
		"no-func-assign": "warn",
		"no-import-assign": "warn",
		"no-inner-declarations": "warn",
		"no-invalid-regexp": "warn",
		"no-irregular-whitespace": [
			"warn",
			{
				"skipStrings": true,
				"skipComments": true,
				"skipTemplates": true,
				"skipRegExps": true
			}
		],
		"no-misleading-character-class": "warn",
		"no-obj-calls": "warn",
		"no-prototype-builtins": "warn",
		"no-regex-spaces": "warn",
		"no-setter-return": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "warn",
		"no-unexpected-multiline": "warn",
		"no-unreachable": "warn",
		"no-unsafe-finally": "warn",
		"no-unsafe-negation": "warn",
		"require-atomic-updates": "warn",
		"use-isnan": [
			"warn",
			{
				"enforceForSwitchCase": true,
				"enforceForIndexOf": true
			}
		],
		"valid-typeof": "warn",
		"accessor-pairs": [
			"warn",
			{
				"enforceForClassMembers": true
			}
		],
		"array-callback-return": "warn",
		"block-scoped-var": "warn",
		"complexity": [
			"warn",
			15
		],
		"consistent-return": "warn",
		"curly": [
			"warn",
			"all"
		],
		"default-case": "warn",
		"dot-location": [
			"warn",
			"property"
		],
		"dot-notation": "warn",
		"eqeqeq": "warn",
		"grouped-accessor-pairs": "warn",
		"guard-for-in": "warn",
		"max-classes-per-file": "warn",
		"no-alert": "warn",
		"no-caller": "warn",
		"no-case-declarations": "warn",
		"no-constructor-return": "warn",
		"no-div-regex": "warn",
		"no-else-return": "warn",
		"no-eq-null": "warn",
		"no-eval": "warn",
		"no-extend-native": "warn",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-fallthrough": "warn",
		"no-floating-decimal": "warn",
		"no-global-assign": "warn",
		"no-implicit-coercion": "warn",
		"no-implicit-globals": "warn",
		"no-invalid-this": "warn",
		"no-iterator": "warn",
		"no-labels": "warn",
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-multi-spaces": "warn",
		"no-multi-str": "warn",
		"no-new": "warn",
		"no-new-func": "warn",
		"no-new-wrappers": "warn",
		"no-octal": "warn",
		"no-octal-escape": "warn",
		"no-param-reassign": "warn",
		"no-proto": "warn",
		"no-redeclare": [
			"warn",
			{
				"builtinGlobals": true
			}
		],
		"no-return-assign": "warn",
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unused-labels": "warn",
		"no-useless-call": "warn",
		"no-useless-catch": "warn",
		"no-useless-concat": "warn",
		"no-useless-escape": "warn",
		"no-useless-return": "warn",
		"no-void": "warn",
		"no-warning-comments": "warn",
		"no-with": "warn",
		"prefer-promise-reject-errors": "warn",
		"prefer-regex-literals": "warn",
		"radix": "warn",
		"vars-on-top": "warn",
		"wrap-iife": [
			"warn",
			"inside"
		],
		"yoda": [
			"warn",
			"never"
		],
		"strict": [
			"warn",
			"never"
		],
		"no-delete-var": "warn",
		"no-label-var": "warn",
		"no-shadow": "warn",
		"no-shadow-restricted-names": "warn",
		"no-undef": "warn",
		"no-undef-init": "warn",
		"array-bracket-newline": [
			"warn",
			{
				"multiline": true,
				"minItems": 5
			}
		],
		"array-bracket-spacing": [
			"warn",
			"always"
		],
		"array-element-newline": [
			"warn",
			"consistent"
		],
		"block-spacing": [
			"warn",
			"always"
		],
		"capitalized-comments": [
			"warn",
			"always",
			{
				"ignoreConsecutiveComments": true
			}
		],
		"comma-dangle": [
			"warn",
			"never"
		],
		"comma-style": "warn",
		"computed-property-spacing": [
			"warn",
			"never"
		],
		"eol-last": [
			"warn",
			"never"
		],
		"func-names": [
			"warn",
			"always"
		],
		"func-style": [
			"warn",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"function-call-argument-newline": [
			"warn",
			"consistent"
		],
		"function-paren-newline": [
			"warn",
			"multiline"
		],
		"implicit-arrow-linebreak": [
			"warn",
			"beside"
		],
		"jsx-quotes": [
			"warn",
			"prefer-double"
		],
		"key-spacing": "warn",
		"keyword-spacing": [
			"warn",
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
		"line-comment-position": "warn",
		"linebreak-style": "warn",
		"lines-around-comment": [
			"warn",
			{
				"beforeLineComment": true,
				"allowBlockStart": true
			}
		],
		"lines-between-class-members": "warn",
		"max-depth": [
			"warn",
			{
				"max": 5
			}
		],
		"max-len": [
			"warn",
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
		"max-lines": "warn",
		"max-lines-per-function": "warn",
		"max-nested-callbacks": [
			"warn",
			{
				"max": 5
			}
		],
		"max-params": [
			"warn",
			4
		],
		"max-statements-per-line": "warn",
		"multiline-comment-style": [
			"warn",
			"bare-block"
		],
		"multiline-ternary": [
			"warn",
			"always-multiline"
		],
		"new-parens": [
			"warn",
			"always"
		],
		"newline-per-chained-call": [
			"warn",
			{
				"ignoreChainWithDepth": 4
			}
		],
		"no-inline-comments": "warn",
		"no-lonely-if": "warn",
		"no-mixed-operators": "warn",
		"no-mixed-spaces-and-tabs": [
			"warn",
			"smart-tabs"
		],
		"no-multi-assign": "warn",
		"no-multiple-empty-lines": [
			"warn",
			{
				"max": 1,
				"maxEOF": 0,
				"maxBOF": 0
			}
		],
		"no-negated-condition": "warn",
		"no-nested-ternary": "warn",
		"no-new-object": "warn",
		"no-plusplus": "warn",
		"no-trailing-spaces": "warn",
		"no-underscore-dangle": "warn",
		"no-unneeded-ternary": "warn",
		"no-whitespace-before-property": "warn",
		"object-curly-newline": [
			"warn",
			{
				"multiline": true,
				"consistent": true
			}
		],
		"object-curly-spacing": [
			"warn",
			"always"
		],
		"one-var": [
			"warn",
			"never"
		],
		"one-var-declaration-per-line": "warn",
		"operator-assignment": "warn",
		"operator-linebreak": [
			"warn",
			"before"
		],
		"padded-blocks": [
			"warn",
			"never"
		],
		"padding-line-between-statements": [
			"warn",
			{ "blankLine": "always", "prev": "*", "next": "return" }
		],
		"prefer-exponentiation-operator": "warn",
		"prefer-object-spread": "warn",
		"quote-props": [
			"warn",
			"as-needed"
		],
		"semi-spacing": "warn",
		"semi-style": "warn",
		"space-before-blocks": "warn",
		"space-in-parens": "warn",
		"space-infix-ops": "warn",
		"space-unary-ops": "warn",
		"spaced-comment": [
			"warn",
			"never"
		],
		"switch-colon-spacing": "warn",
		"template-tag-spacing": "warn",
		"arrow-parens": [
			"warn",
			"as-needed"
		],
		"arrow-spacing": "warn",
		"constructor-super": "warn",
		"generator-star-spacing": [
			"warn",
			{
				"before": true,
				"after": false
			}
		],
		"no-class-assign": "warn",
		"no-confusing-arrow": "warn",
		"no-const-assign": "warn",
		"no-duplicate-imports": "warn",
		"no-new-symbol": "warn",
		"no-this-before-super": "warn",
		"no-useless-computed-key": "warn",
		"no-useless-rename": "warn",
		"no-var": "warn",
		"object-shorthand": "warn",
		"prefer-arrow-callback": "warn",
		"prefer-const": "warn",
		"prefer-destructuring": "warn",
		"prefer-numeric-literals": "warn",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"prefer-template":  "warn",
		"require-yield": "warn",
		"rest-spread-spacing": [
			"warn",
			"never"
		],
		"symbol-description": "warn",
		"template-curly-spacing": "warn",
		"yield-star-spacing": [
			"warn", 
			{
				"before": true, "after": false
			}
		],

		"@typescript-eslint/adjacent-overload-signatures": "warn",
		"@typescript-eslint/array-type": [
			"warn",
			{
				"default": "array-simple"
			}
		],
		"@typescript-eslint/await-thenable": "warn",
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/ban-types": "warn",
		"@typescript-eslint/class-literal-property-style": "warn",
		"@typescript-eslint/consistent-type-assertions": "warn",
		"@typescript-eslint/consistent-type-definitions": [
			"warn",
			"interface"
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"warn",
			{
				"accessibility": "explicit"
			}
		],
		"@typescript-eslint/member-delimiter-style": "warn",
		"@typescript-eslint/member-ordering": [
			"warn",
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
			"warn",
			"method"
		],
		"@typescript-eslint/naming-convention": [
			"warn",
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
		"@typescript-eslint/no-base-to-string": "warn",
		"@typescript-eslint/no-dynamic-delete": "warn",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-extra-non-null-assertion": "warn",
		"@typescript-eslint/no-floating-promises": "warn",
		"@typescript-eslint/no-for-in-array": "warn",
		"@typescript-eslint/no-implied-eval": "warn",
		"@typescript-eslint/no-inferrable-types": "warn",
		"@typescript-eslint/no-misused-new": "warn",
		"@typescript-eslint/no-misused-promises": "warn",
		"@typescript-eslint/no-namespace": "warn",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
		"@typescript-eslint/no-require-imports": "warn",
		"@typescript-eslint/no-this-alias": "warn",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
		"@typescript-eslint/no-unnecessary-condition": "warn",
		"@typescript-eslint/no-unnecessary-qualifier": "warn",
		"@typescript-eslint/no-unnecessary-type-arguments": "warn",
		"@typescript-eslint/no-unnecessary-type-assertion": "warn",
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-unsafe-member-access": "warn",
		"@typescript-eslint/no-unsafe-return": "warn",
		"@typescript-eslint/no-unused-vars-experimental": "warn",
		"@typescript-eslint/no-var-requires": "warn",
		"@typescript-eslint/prefer-as-const": "warn",
		"@typescript-eslint/prefer-for-of": "warn",
		"@typescript-eslint/prefer-function-type": "warn",
		"@typescript-eslint/prefer-includes": "warn",
		"@typescript-eslint/prefer-namespace-keyword": "warn",
		"@typescript-eslint/prefer-nullish-coalescing": "warn",
		"@typescript-eslint/prefer-optional-chain": "warn",
		"@typescript-eslint/prefer-readonly": "warn",
		"@typescript-eslint/prefer-reduce-type-parameter": "warn",
		"@typescript-eslint/prefer-regexp-exec": "warn",
		"@typescript-eslint/prefer-string-starts-ends-with": "warn",
		"@typescript-eslint/prefer-ts-expect-error": "warn",
		"@typescript-eslint/require-array-sort-compare": "warn",
		"@typescript-eslint/restrict-plus-operands": "warn",
		"@typescript-eslint/restrict-template-expressions": "warn",
		"@typescript-eslint/strict-boolean-expressions": "warn",
		"@typescript-eslint/switch-exhaustiveness-check": "warn",
		"@typescript-eslint/triple-slash-reference": [
			"warn",
			{
				"path": "never",
				"types": "never",
				"lib": "never"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "warn",
		"@typescript-eslint/unbound-method": "warn",
		"@typescript-eslint/brace-style": [
			"warn",
			"1tbs"
		],
		"@typescript-eslint/comma-spacing": "warn",
		"@typescript-eslint/default-param-last": "warn",
		"@typescript-eslint/func-call-spacing": [
			"warn",
			"never"
		],
		"@typescript-eslint/indent": [
			"warn",
			"tab"
		],
		"@typescript-eslint/no-array-constructor": "warn",
		"@typescript-eslint/no-dupe-class-members": "warn",
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-extra-semi": "warn",
		"@typescript-eslint/no-unused-expressions": "warn",
		"@typescript-eslint/no-unused-vars-experimental": [
			"warn",
			{
				"ignoredNamesRegex": "React"
			}
		],
		"@typescript-eslint/no-use-before-define": "warn",
		"@typescript-eslint/no-useless-constructor": "warn",
		"@typescript-eslint/quotes": "warn",
		"@typescript-eslint/return-await": "warn",
		"@typescript-eslint/semi": "warn",
		"@typescript-eslint/space-before-function-paren": [
			"warn",
			{
				"anonymous": "never",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"@typescript-eslint/non-nullable-type-assertion-style": "warn",
		"@typescript-eslint/no-confusing-void-expression": [
			"warn", {
				"ignoreArrowShorthand": true
			}
		],
		"@typescript-eslint/no-unnecessary-type-constraint": "warn",
		"@typescript-eslint/consistent-indexed-object-style": "warn",
		"@typescript-eslint/no-implicit-any-catch": "warn",
		"@typescript-eslint/prefer-literal-enum-member": "warn",
		"@typescript-eslint/no-confusing-non-null-assertion": "warn",
		"@typescript-eslint/sort-type-union-intersection-members": "warn",
		"jsdoc/check-access": "warn",
		"jsdoc/check-alignment": "warn",
		"jsdoc/check-param-names": "warn",
		"jsdoc/check-property-names": "warn",
		"jsdoc/check-syntax": "warn",
		"jsdoc/check-tag-names": "warn",
		"jsdoc/check-values": "warn",
		"jsdoc/empty-tags": "warn",
		"jsdoc/implements-on-classes": "warn",
		"jsdoc/newline-after-description": "warn",
		"jsdoc/no-types": "warn",
		"jsdoc/require-description-complete-sentence": "warn",
		"jsdoc/require-description": "warn",
		"jsdoc/require-hyphen-before-param-description": "warn",
		"jsdoc/require-jsdoc": [
			"warn",
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
		"jsdoc/require-param-description": "warn",
		"jsdoc/require-param-name": "warn",
		"jsdoc/require-param": "warn",
		"jsdoc/require-property": "warn",
		"jsdoc/require-property-description": "warn",
		"jsdoc/require-property-name": "warn",
		"jsdoc/require-returns-check": "warn",
		"jsdoc/require-returns-description": "warn",
		"jsdoc/require-returns": "warn",
		"node/no-callback-literal": "warn",
		"node/no-exports-assign": "warn",
		"node/no-extraneous-import": "warn",
		"node/no-extraneous-require": "warn",
		"node/no-missing-require": "warn",
		"node/no-unpublished-bin": "warn",
		"node/no-unpublished-require": "warn",
		"node/no-unpublished-import": "warn",
		"node/no-unsupported-features/es-builtins": "warn",
		"node/no-unsupported-features/node-builtins": "warn",
		"node/process-exit-as-throw": "warn",
		"node/shebang": "warn",
		"node/no-deprecated-api": "warn",
		"node/exports-style": [
			"warn",
			"module.exports"
		],
		"node/file-extension-in-import": [
			"warn",
			"never",
			{
				".svg": "always",
				".css": "always"
			}
		],
		"node/prefer-global/buffer": [
			"warn",
			"never"
		],
		"node/prefer-global/console": [
			"warn",
			"always"
		],
		"node/prefer-global/text-decoder": [
			"warn",
			"always"
		],
		"node/prefer-global/text-encoder": [
			"warn",
			"always"
		],
		"node/prefer-global/url-search-params": [
			"warn",
			"always"
		],
		"node/prefer-global/url": [
			"warn",
			"always"
		],
		"node/prefer-global/process": [
			"warn",
			"always"
		],
		"node/prefer-promises/dns":	"warn",
		"node/prefer-promises/fs": "warn"
	}
}