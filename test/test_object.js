/*
 * Copyright 2012-2013 VirtuOz Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A test object for synthesis that synthesizes some properties in order for the main test to check functionality.
 *
 * @author Kevan Dunsmore
 * @created 2012/08/25
 */
var $synthesize = require('../index').synthesize;

function TestObject()
{
}

$synthesize(TestObject, 'foo');
$synthesize(TestObject, 'bar', 'read');
$synthesize(TestObject, 'baz', 'write');
$synthesize(TestObject, 'qux', 'read-write');

module.exports = TestObject;
